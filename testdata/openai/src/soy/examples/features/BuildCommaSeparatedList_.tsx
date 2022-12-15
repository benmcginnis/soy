import * as React from 'react';

/**
 * Private helper to build a comma separated list.
 * @param props
 * @param props.items The list of items.
 *
 * @internal
 */
export const BuildCommaSeparatedList_ = (props : {items: string[]}) => {
  return (
    <>
      {props.items.map((item, index, arr) => {
        return (
          <React.Fragment key={index}>
            {(()=>{
              if (!(index === 0)) {
                return (
                  <>
                    ,{' '}
                  </>
                )
              }
            })()}
            {item}
          </React.Fragment>
        )
      })}
    </>
  )
}