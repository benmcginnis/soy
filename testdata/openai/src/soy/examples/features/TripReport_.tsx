import * as React from 'react';
import { hasData } from '../../../soyfuncs';


/**
 * Private helper for DemoCallWithoutParams, DemoCallWithParams, and DemoCallWithParamBlock.
 * Reports on a trip.
 * @param? name The name of the person who took a trip (optional).
 * @param? destination The destination of the trip (optional).
 *
 * @internal
 */
export const TripReport_ = (props :{ name? :any, destination? :any }) => {
  const { name, destination } = props;
  return (
    <>
      {/* Note: The template name demonstrates the good practice of adding a trailing underscore to */}
      {/* private templates (template that should never be called from hand-written code). */}

      {/* Note: All parameters to this template are optional. Therefore, below, we must check for */}
      {/* "not (hasData() and $name)" rather than simply "not $name" because if absolutely no data is */}
      {/* passed, then evaluating "$name" will cause an exception. */}

      {(() =>{
        if (!(hasData() && name))  {
          return (
            <>
              {/* Note: The message below demonstrates that the 'desc' attribute can be left empty. However, */}
              {/* this is not recommended except for the simplest messages, otherwise you risk confusing some */}
              {/* translators and getting poor translations. */}
              {/*{msg desc=""}*/}
              A trip was taken.
              {/*{/msg}*/}
            </>
          )
        } else if (!destination)  {
          return (
            <>
              {/*{msg desc="Example: Alice took a trip."}*/}
              {name} took a trip.
              {/*{/msg}*/}
            </>
          )
        } else {
          return (
            <>
              {/*{msg desc="Example: Alice took a trip to wonderland."}*/}
              {name} took a trip to {destination}.
              {/*{/msg}*/}
            </>
          )
        }
      })()}
    </>
  )
}