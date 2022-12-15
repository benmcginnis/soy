import * as React from 'react';
import { ceiling, randomInt, round } from '../../../soyfuncs';

/**
 * Demo expressions.
 * @param props.students Nonempty list of students. Each student must have 'name', 'major', and 'year'.
 * @param props.currentYear The current year.
 */
export const DemoExpressions = (props :{
  students :any
  currentYear :any
}) => {
  const { students, currentYear } = props;
  return (
    <>
      First student's major: {students[0].major}<br/>
      Last student's year: {students[students.length - 1].year}<br/>
      Random student's major: {students[randomInt(students.length)].major}<br/>

      {students.map((student, index, arr)=>{
        return (
          <React.Fragment key={index}>
            {student.name}:
            {(()=>{
              if (index === 0) {
                return (
                  <>
                    {' '}First.
                  </>
                )
              } else if (index === arr.length) {
                return (
                  <>
                    {' '}Last.
                  </>
                )
                // Note: must use floor() in next check since division is floating-point.
              } else if (index === ceiling(students.length / 2) -1) {
                return (
                  <>
                    {' '}Middle.
                  </>
                )
              }
            })()}
            {(()=>{
              if (index % 2 === 1) { return <> Even.</> }
            })()}
            {' '}{student.major}.
            {(()=>{
              if (student.major === 'Physics' || student.major === 'Biology') { return <> Scientist.</> }
            })()}
            {(()=>{
              if (currentYear - student.year < 10)  { return <> Young.</> }
            })()}
            {/* The following print statement prints "70s", "80s", "90s", or "00s". Note that "00s" is a */}
            {/* special case since using the same expression would yield "0s", not "00s". */}
            {' '}{student.year < 2000 ? round(student.year - 1905, -1) + 's' : '00s'}.
            {/* Equivalent to previous line. */}
            {' '}{(()=>{
            if (student.year < 2000) {
              return (
                <>
                  {round(student.year - 1905, -1)}
                </>
              )
            } else {
              return (
                <>
                  00
                </>
              )
            }
          })()}s.
            <br/>
          </React.Fragment>
        )
      })}
    </>
  )
}