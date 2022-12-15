import * as React from 'react';

/**
 * Template for printing the header to add before each example.
 * @param props.exampleNum The number of the example.
 * @param props.exampleName The name of the example.
 */
export const ExampleHeader = (props :{
  exampleNum :any
  exampleName :any
}) => {
  const { exampleNum, exampleName } = props;
  return (
    <>
      <hr/>
      <b>{exampleNum}. {exampleName}</b><br/>
    </>
  )
}
