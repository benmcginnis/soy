import * as React from 'react';

export interface DemoParamWithKindAttributeCallee_Props {
  message: any;
  listItems: any;
}

/**
 * Demo {param} blocks with 'kind' attribute.
 * @param props
 * @param props.message A message with HTML markup.
 * @param props.listItems A HTML-formatted list.
 *
 * @internal
 */
export const DemoParamWithKindAttributeCallee_ = (props :DemoParamWithKindAttributeCallee_Props) => {
  const { message, listItems } = props;
  // private="true" autoescape="contextual"
  // TODO: how to actually mimic this in jsx?
  return (
    <>
      {/* Note that both $message and $listItems contain HTML markup produced by a {param} block in the */}
      {/* the calling template.  Since the {param} blocks are declared to have HTML content, their values */}
      {/* are wrapped as soydata.SanitizedHtml objects.  This in turn causes them to be emitted here */}
      {/* without further escaping.  In particular, it is not necessary to use the |noAutoescape print */}
      {/* directive to prevent double-escaping. */}
      <div>
        {message}
      </div>
      <ol>
        {listItems}
      </ol>
    </>
  )
}