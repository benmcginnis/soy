import * as React from 'react';

export interface DemoForeachProps {
  persons: any;
}

/**
 * Demo 'foreach'.
 * @param props DemoForeachProps
 * @param props.persons List of persons. Each person must have 'name' and 'numWaffles'.
 */
export const DemoForeach = (props: DemoForeachProps ) => {
  const { persons } = props;
  return (
    <>
      {(()=>{
        if (persons.length >= 0) {
          return (
            <>
              {persons.map((person, index) => {
                return (
                  <React.Fragment key={index}>
                    {(()=>{
                      if (index === 0) {
                        return (
                          <>
                            First,
                          </>
                        )
                      } else if (index === persons.length -1) {
                        return (
                          <>
                            Finally,
                          </>
                        )
                      } else {
                        return (
                          <>
                            Then
                          </>
                        )
                      }
                    })}
                    {' '}
                    {(()=>{
                      if (person.numWaffles == 1){
                        return (
                          <>
                            {person.name} ate 1 waffle.
                          </>
                        )
                      } else {
                        return (
                          <>
                            {person.name} ate {person.numWaffles} waffles.
                          </>
                        )
                      }
                    })()}
                    <br/>
                  </React.Fragment>
                )
              })}
            </>
          )
        } else {
          return (
            <>
              Nobody here ate any waffles.<br/>
            </>
          )
        }
      })}
    </>
  )
}