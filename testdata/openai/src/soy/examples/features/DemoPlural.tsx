import * as React from 'react';
import { Trans } from 'react-i18next'

/**
 * Demo 'plural'.
 * @param props.eggs The number of eggs you need to buy
 */
export const DemoPlural = (props: {eggs: number}) => {
  const { eggs } = props;
  return (
    <>
      {(() => {
        switch (eggs) {
          case 1:
            return (
              <Trans i18nKey="Says hello to a person." count={1}>
                You have one egg
              </Trans>
            )
          default:
            return (
              <Trans i18nKey="Says hello to a person." count={eggs}>
                You have {{eggs}} eggs
              </Trans>
            )
        }
      })()}
    </>
  )
}
