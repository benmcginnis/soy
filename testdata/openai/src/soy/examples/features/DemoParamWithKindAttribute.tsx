import * as React from 'react';
import { DemoParamWithKindAttributeCallee_ } from './DemoParamWithKindAttributeCallee_';

// TODO: figure out how to implement this contextual autoescaping
/**
 * Demo {param} blocks with 'kind' attribute.
 * @param props.message A message text.
 * @param props.list A list of things.
 */
export const DemoParamWithKindAttribute = (props :{ message :any, list :any }) => {
  const { message, list } = props;
  // autoescape="contextual"
  return (
    <>
      <div>
        {/* Note that the {param} blocks for the message and listItems parameter are declared to have */}
        {/* content of kind HTML. This instructs the contextual autoescaper to process the content of */}
        {/* these blocks as HTML, and to wrap the the value of the parameter as a soydata.SanitizedHtml */}
        {/* object. */}
        <DemoParamWithKindAttributeCallee_
          // kind="html"
          message={(()=>{
            return (
              <>
                <b>{message}</b>
              </>
            )
          })()}
          // kind="html"
          listItems={(()=>{
            return (
              <>
                {list.map((i)=>{
                  return (
                    <React.Fragment key={i}>
                      <li>{i}</li>
                    </React.Fragment>
                  )
                })}
              </>
            )
          })()}
        />
      </div>
    </>
  )
}
