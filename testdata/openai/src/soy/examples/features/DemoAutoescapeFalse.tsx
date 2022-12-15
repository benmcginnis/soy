import * as React from 'react';
import { escapeHtml } from '../../../soyfuncs';

/**
 * Demo autoescape false.
 * @param props SoyExamplesSimple__demoAutoescapeFalse__props
 * @param props.italicHtml A string surrounded by HTML italics tags.
 */
export function SoyExamplesSimple__demoAutoescapeFalse(props: {
  italicHtml: any
}) {
  const { italicHtml } = props;
  return (
    <>
      {/* Note: Use autoescape="false" with care, as more cross-site scripting bugs may slip through. */}
      {props.italicHtml}<br/> {/* no autoescaping will be applied */}
      {escapeHtml(props.italicHtml)}<br/>  {/* escapeHtml directive applies HTML escaping */}
    </>
  )
}