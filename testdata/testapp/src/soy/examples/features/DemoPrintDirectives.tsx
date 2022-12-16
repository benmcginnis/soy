import * as React from 'react';
import { id, insertWordBreaks } from '../../../soyfuncs';

export interface DemoPrintDirectivesProps {
  longVarName: any;
  elementId: any;
  cssClass: any;
}

/**
 * Demo print directives.
 * @param props
 * @param props.longVarName Some ridiculously long variable name.
 * @param props.elementId The id for an element.
 * @param props.cssClass A CSS class name.
 */
export const DemoPrintDirectives = (props: DemoPrintDirectivesProps) => {
  const { longVarName, elementId, cssClass } = props;
  return (
    <>
      insertWordBreaks:<br/>
      <div style={{width:'150px', border:'1px solid #00CC00'}}>
        {longVarName}<br/>  {/* will run outside the div border */}
        {insertWordBreaks(longVarName, 5)}<br/>  {/* will be allowed to wrap*/}
      </div>

      id:<br/>
      {/* The 'id' and 'class' attributes of this span will not be needlessly autoescaped because they */}
      {/* are marked with the print directive '|id'. */}
      {/* Note: Only use '|id' with identifiers like id and class (otherwise use '|noAutoescape') */}
      <span id={id(elementId)} className={id(cssClass)} style={{border:'1px solid #000000'}}>
                Hello
            </span>
    </>
  )
}
