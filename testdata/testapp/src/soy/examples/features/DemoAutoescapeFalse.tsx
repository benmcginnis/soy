import * as React from 'react';
import { escapeHtml } from '../../../soyfuncs';

export interface DemoAutoescapeFalseProps {
  italicHtml: any;
}

/**
 * Demo autoescape false.
 * @param props DemoAutoescapeFalseProps
 * @param props.italicHtml A string surrounded by HTML italics tags.
 */
export function DemoAutoescapeFalse(props: DemoAutoescapeFalseProps) {
  const { italicHtml } = props;
  return (
    <>
      {/* Note: Use autoescape="false" with care, as more cross-site scripting bugs may slip through. */}
      {italicHtml}<br/> {/* no autoescaping will be applied */}
      {escapeHtml(italicHtml)}<br/>  {/* escapeHtml directive applies HTML escaping */}
    </>
  )
}