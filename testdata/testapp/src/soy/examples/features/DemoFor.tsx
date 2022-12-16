import * as React from 'react';
import { range } from '../../../soyfuncs';

export interface DemoForProps {
  numLines: any;
}

/**
 * Demo 'for'.
 * @param props DemoForProps
 * @param props.numLines The number of lines to display.
 */
export const DemoFor = (props :DemoForProps) => {
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

      {range(10, 2, 2).map((i)=>{
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