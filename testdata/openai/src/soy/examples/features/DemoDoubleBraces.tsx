import * as React from 'react';
import { BuildCommaSeparatedList_ } from './BuildCommaSeparatedList_';
import { Trans } from 'react-i18next';

/**
 * Demo double braces.
 * @param props.setName The name of the infinite set.
 * @param props.setMembers List of the first few members of the set.
 */
export const DemoDoubleBraces = (props :{ setName :any, setMembers :any}) => {
  const { setName, setMembers } = props;

  return (
    <>
      {/* If a Soy tag needs to have brace characters within, use double braces to delimit the tag. */}
      <Trans i18nKey={"Example: The set of prime numbers is {2, 3, 5, 7, 11, 13, ...}."}>
        {/* Note: This message also demonstrates a useful trick. Since a 'msg' block cannot contain a */}
        {/* 'foreach' statement (impossible to translate as one message), we use a 'call' to a helper */}
        {/* template that contains the 'foreach' loop. In order to use this trick, please observe the */}
        {/* following: (a) the output of the 'call' must not contain translated content, otherwise the */}
        {/* message would be translated in multiple parts and may not read correctly in some languages, */}
        {/* (b) since the whole 'call' turns into a single placeholder, be sure to provide a clear */}
        {/* description and example to the translator. */}
        The set of {setName} is {'{'}
        <BuildCommaSeparatedList_ items={setMembers} />
        , ...{'}'}.
      </Trans>
    </>
  )
}
