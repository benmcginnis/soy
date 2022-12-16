import * as React from 'react';

export interface ExampleHeaderProps {
  exampleNum: any;
  exampleName: any;
}

/**
 * Template for printing the header to add before each example.
 * @param props
 * @param props.exampleNum The number of the example.
 * @param props.exampleName The name of the example.
 */
export const ExampleHeader = (props :ExampleHeaderProps) => {
  const { exampleNum, exampleName } = props;
  return (
    <>
      <hr/>
      <b>{exampleNum}. {exampleName}</b><br/>
    </>
  )
}
