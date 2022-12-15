import * as React from 'react';
import { HelloWorld } from '../simple/HelloWorld';
import { TripReport_ } from './TripReport_';

/**
 * Demo 'call' without 'param's.
 * @param props.name The name of the person who took a trip.
 * @param props.tripInfo The full record of the trip ('name' and 'destination').
 */
export const DemoCallWithoutParam = (props :{ name :any, tripInfo :any }) => {
  const { name, tripInfo } = props;
  return (
    <>
      {/* Call template defined in a different file. */}
      <HelloWorld/><br/>

      {/* Call template defined in this file. */}
      <TripReport_ /><br/>

      {/* Pass all of the current template data to the callee. */}
      {/* Note: Only the top-level key 'name' will be used because it matches the name of a parameter */}
      {/* expected by the callee. */}
      <TripReport_ {...props}/><br/>

      {/* Pass a subset of the current template data to the callee. */}
      <TripReport_ {...tripInfo}/><br/>
    </>
  )
}
