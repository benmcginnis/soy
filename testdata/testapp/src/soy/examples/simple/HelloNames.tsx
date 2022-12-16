import * as React from 'react';
import { HelloWorld } from './HelloWorld';
import { HelloName } from './HelloName';

export interface IHelloNamesProps {
  names: string[]
}

/**
 * Say hello to a list of people.
 * @param props HelloNamesProps
 * @param props.names List of names of the people to say hello to.
 */
export const HelloNames = (props: IHelloNamesProps) => {
  const { names } = props;
  return (
    <>
      {names.map((name, index) => (
        <React.Fragment key={index}>
          <HelloName name={name} />
          {index !== names.length - 1 && <br />}
        </React.Fragment>
      ))}
      {names.length === 0 && <HelloWorld />}
    </>
  );
};