import * as React from 'react';
import { GLOBAL_BOOL, GLOBAL_INT } from '../../../Globals';
import { print } from '../../../soyfuncs';

export interface DemoPrintProps {
  boo: any;
  two: any;
}

/**
 * Demo 'print'.
 * @param props
 * @param props.boo Something scary.
 * @param props.two Preferably the number 2.
 */
export const DemoPrint = (props: DemoPrintProps) => {
  const { boo, two } = props;
  return (
    <>
      {print('Boo!')}<br/>  // print a string
      {'Boo!'}<br/>  // the command name 'print' is implied
      {1 + 2}<br/>  // print the result of an expression
      {boo}<br/>  // print a data value
      {1 + two}<br/>  // print the result of an expression that uses a data value
      {GLOBAL_INT}, {GLOBAL_BOOL}.<br/>  // print globals
    </>
  )
}
