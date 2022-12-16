import * as React from 'react';
import { Trans } from 'react-i18next';
import { round } from '../../../soyfuncs';

export interface DemoIfProps {
  pi: any;
}

/**
 * Demo 'if'.
 * @param props DemoIfProps
 * @param props.pi An approximate value for pi.
 */
export const DemoIf = (props: DemoIfProps) => {
  const { pi } = props;
  return (
    <>
      {(() => {
        if (round(pi, 2) == 3.14) {
          console.log(pi, round(pi, 2));
          return (
            <Trans i18nkey="Example: 3.1416 is a good approximation of pi.">
              {{pi}} is a good approximation of pi.
            </Trans>
          )
        } else if (round(pi) == 3) {
          console.log(pi, round(pi, 3));
          return (
            <Trans i18nkey="Example: 3.1 is a bad approximation of pi.">
              {{pi}} is a bad approximation of pi.
            </Trans>
          )
        } else {
          return (
            <Trans i18nkey="Example: 5 is nowhere near the value of pi.">
              {{pi}} is nowhere near the value of pi.
            </Trans>
          )
        }
      })()}
      <br/>
    </>
  )
}