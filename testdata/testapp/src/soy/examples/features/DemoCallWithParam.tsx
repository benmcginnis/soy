import * as React from 'react';
import { TripReport_ } from './TripReport_';

export interface DemoCallWithParamProps {
  name: any;
  companionName: any;
  destinations: any;
}

/**
 * Demo 'call' with 'param's.
 * @param props DemoCallWithParamProps
 * @param props.name The name of the person who took the trips.
 * @param props.companionName The name of the person who went along for the odd-numbered trips only.
 * @param props.destinations List of destinations visited by this person.
 */
export const DemoCallWithParam = (props :DemoCallWithParamProps) => {
  const { companionName, destinations } = props;
  return (
    <>
      {destinations.map((destination :any, index :number)=>{
        return (
          <React.Fragment key={index}>
            {/* Pass the current template data and also pass a parameter. */}
            {/* Note: Only passing data="all" is not sufficient for providing the 'destination' parameter of */}
            {/* the callee because $destination is a local variable here, not part of the template data */}
            {/* passed by data="all". */}
            <TripReport_ {...props} destination={destination} /><br/>
            {(()=>{
              if (index % 2 === 0) { // even index means odd-numbered trip since index is 0-based
                // Pass two parameters.
                return (
                  <>
                    <TripReport_ name={companionName} destination={destination} /><br/>
                  </>
                )
              }
            })()}
          </React.Fragment>
        )
      })}
    </>
  )
}
