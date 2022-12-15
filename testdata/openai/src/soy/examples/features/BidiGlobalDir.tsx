import * as React from 'react';
import { bidiGlobalDir } from '../../../soyfuncs';

/**
 * Template that outputs -1 in a right-to-left page and 1 in a left-to-right page, i.e. basically
 * exposes the results of Soy's bidiGlobalDir() to scripts.
 */
export const BidiGlobalDir = () => {
  return (
    <>
      {bidiGlobalDir()}
    </>
  )
}