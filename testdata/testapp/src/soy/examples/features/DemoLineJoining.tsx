import * as React from 'react';

/**
 * Demo line joining.
 */
export const DemoLineJoining = () => {
  return (
    <>
      {/* Without any HTML or Soy tags at the end of the first line or start of the second line, the two} () */}
      {/* lines will be joined by adding a space. */}
      First
      second.<br/>
      {/* With either an HTML or Soy tag bordering the join location (end of the first line or start of () */}
      {/* the second line), the lines will be joined without adding a space. */}
      {/* Example with HTML tag at end of first line: */}
      <i>First</i>
      second.<br/>
      {/* Example with Soy tag at start of second line: () */}

      First
      {''}second.<br/>
      {/* To add a space to a line-joining location where a space would not normally be added (because () */}
      {/* (it borders an HTML or Soy tag), use the {sp} tag. */}
      <i>First</i>{' '}
      second.<br/>
      {/* To prevent a space from being added to a line-joining location where a space would normally be () */}
      {/* added, use the {nil} tag. This tag prints nothing (empty string), but causes the line-joining */}
      {/* location to border a Soy tag, thus preventing the line-joining space. */}
      First{''}
      second.<br/>
    </>
  )
}