import * as React from 'react';
import { range } from '../../../soyfuncs';

/**
 * Demo 'for'.
 * @param props.numLines The number of lines to display.
 */
export const DemoFor = (props :{ numLines :any }) => {
  const { numLines } = props;
  return (
    <>
      {range(numLines).map((i) =>{
        return (
          <React.Fragment key={i}>
            Line {i + 1} of {numLines}.<br/>
          </React.Fragment>
        )
      })}

      {range(2, 10, 2).map((i)=>{
        return (
          <React.Fragment key={i}>
            {i}...{' '}
          </React.Fragment>
        )
      })}
      Who do we appreciate?<br/>
    </>
  )
}