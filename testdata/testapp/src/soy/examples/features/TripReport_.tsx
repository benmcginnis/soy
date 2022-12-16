import * as React from 'react';
import { Trans } from 'react-i18next';
import { hasData } from '../../../soyfuncs';

export interface TripReportProps {
  name?: any;
  destination?: any;
}

/**
 * Private helper for DemoCallWithoutProps, DemoCallWithProps, and DemoCallWithParamBlock.
 * Reports on a trip.
 * @param props TripReportProps
 * @param? props.name The name of the person who took a trip (optional).
 * @param? props.destination The destination of the trip (optional).
 *
 * @internal
 */
export const TripReport_ = (props: TripReportProps) => {
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
          // Note: The message below demonstrates that the 'desc' attribute can be left empty. However,
          // this is not recommended except for the simplest messages, otherwise you risk confusing some
          // translators and getting poor translations.
          return (
              <Trans>
                A trip was taken.
              </Trans>
          )
        } else if (!destination)  {
          return (
              <Trans i18nKey= "Example: Alice took a trip.">
                {name} took a trip.
              </Trans>
          )
        } else {
          return (
              <Trans i18nKey= "Example: Alice took a trip to wonderland.">
                {name} took a trip to {destination}.
              </Trans>
          )
        }
      })()}
    </>
  )
}