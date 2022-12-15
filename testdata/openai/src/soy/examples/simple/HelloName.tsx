import * as React from 'react';
import { Trans } from 'react-i18next'
import { HelloWorld } from './helloWorld';

/**
 * Says hello to a person (or to the world if no person is given).
 * @param? props.name The name of the person to say hello to.
 */
export const HelloName = (props: { name: string }) => {
  const { name } = props;
  if (name) {
    return (
      <Trans i18nKey="Says hello to a person">
        Hello {{name}}!
      </Trans>
    )
  } else {
    return <HelloWorld />;
  }
}