import * as React from 'react';

/**
 * @internal
 */
export interface BuildCommaSeparatedListProps_ {
  items: string[];
}

/**
 * Private helper to build a comma separated list.
 * @param props BuildCommaSeparatedListProps_
 * @param props.items The list of items.
 *
 * @internal
 */
export const BuildCommaSeparatedList_ = (props: BuildCommaSeparatedListProps_) => {
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