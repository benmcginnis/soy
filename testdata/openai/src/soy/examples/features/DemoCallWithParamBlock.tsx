import * as React from 'react';
import { randomInt } from '../../../soyfuncs';
import { TripReport_ } from './TripReport_';

/**
 * Demo 'call' with a 'param' block.
 * @param props.name The name of the person who took the trip.
 */
export const DemoCallWithParamBlock = (props :{ name :any }) => {
  const { name } = props;
  return (
    <>
      {/* Pass 2 parameters, one of which is built using Soy code. */}
      <TripReport_ name={name} destination={(()=>{
        switch (randomInt(3)) {
        case 0:
          return (
            <>
              Boston
            </>
          )
        case 1:
          return (
            <>
              Singapore
            </>
          )
        case 2:
          return (
            <>
              Zurich
            </>
          )
        }
      })()} />
      <br/>
    </>
  )
}