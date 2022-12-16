import * as React from 'react';
import { Trans } from 'react-i18next'
import { HelloWorld } from './HelloWorld';

export interface HelloNameParams {
  name: string;
}

/**
 * Says hello to a person (or to the world if no person is given).
 * @param props
 * @param? props.name The name of the person to say hello to.
 */
export const HelloName = (props: HelloNameParams) => {
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