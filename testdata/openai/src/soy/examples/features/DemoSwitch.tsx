import * as React from 'react';

/**
 * Demo 'switch'.
 * @param props.name The name of a kid.
 */
export const DemoSwitch = (props :{ name :string }) => {
  const { name } = props;
  return (
    <>
      Dear {name}, &nbsp;

      {(() => {
        switch (name) {
        case 'Go':
          return (
            <>
              You've been bad this year.
            </>
          )
        case 'Fay':
        case 'Ivy':
          return (
            <>
              You've been good this year.
            </>
          )
        default:
          return (
            <>
              You don't really believe in me, do you?
            </>
          )
        }
      })()}

      &nbsp; --Santa<br/>
    </>
  )
}