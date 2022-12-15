import * as React from 'react';
import { noAutoescape } from '../../../soyfuncs';

/**
 * Demo autoescape true.
 * @param props.italicHtml A string surrounded by HTML italics tags.
 */
export const DemoAutoescapeTrue = (props: {
  italicHtml: any
}) => {
  const { italicHtml } = props;
  return (
    <>
      {/* Note: We explicitly list autoescape="true" in the 'template' tag for demonstration. Usually ( */}
      {/* it's omitted because "true" is the attribute's default value. */}
      {/* Note: The parameter name 'italicHtml' demonstrates the good practice of adding the suffix */}
      {/* 'Html' to identify strings that may contain HTML tags and are known to be safe. */}
      {italicHtml}<br/>  {/* autoescape causes HTML tags to appear literally */}
      {noAutoescape(italicHtml)}<br/>  {/* noAutoescape directive prevents autoescaping */}
    </>
  )
}
