import * as React from 'react';
import { round } from '../../../soyfuncs';

/**
 * Demo 'if'.
 * @param props.pi An approximate value for pi.
 */
export const DemoIf = (props :{ pi :any }) => {
  const { pi } = props;
  return (
    <>
      {(() => {
        if (round(pi, 2) == 3.14) {
          return (
            <>
              {/*{msg desc="Example: 3.1416 is a good approximation of pi."}*/}
              {pi} is a good approximation of pi.)
              {/*{/msg}*/}
            </>
          )
        } else if (round(pi) == 3) {
          return (
            <>
              {/*{msg desc="Example: 3.1 is a bad approximation of pi."}*/}
              {pi} is a bad approximation of pi.
              {/*{/msg}*/}
            </>
          )
        } else {
          return (
            <>
              {/*{msg desc="Example: 5 is nowhere near the value of pi."}*/}
              {pi} is nowhere near the value of pi.
              {/*{/msg}*/}
            </>
          )
        }
      })()}
      <br/>
    </>
  )
}