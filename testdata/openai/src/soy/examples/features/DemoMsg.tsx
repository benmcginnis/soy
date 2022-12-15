import * as React from 'react';
import { Trans } from 'react-i18next'

/**
 * Demo 'msg'.
 * @param props.name - The name of the person to say hello to.
 * @param props.labsUrl - The URL of the unreleased 'Labs' feature.
 */
export const DemoMsg = (props: { name: string; labsUrl: string }) => {
  const { name, labsUrl } = props;
  return (
    <>
      <Trans i18nKey="Says hello to a person.">
        Hello {{name}}!
      </Trans>
      <br />
      <Trans i18nKey="Link to the unreleased 'Labs' feature.">
        Click <a href={labsUrl}>here</a> to access Labs.
      </Trans>
      <br />

      {/* The 'meaning' attribute is used when you have two messages that are exactly the same string in */}
      {/* English, but may be translated to different strings in other languages. The 'meaning' attribute */}
      {/* should then be a short string that distinguishes the two strings, and will be used for */}
      {/* generating different message ids. The 'meaning' will not be shown to translators, so you must */}
      {/* still communicate all the details in the 'desc' text. */}
      <Trans i18nKey="(meaning: noun) The word 'Archive' used as a noun, i.e. an information store.">
        Archive
      </Trans>
      <br />
      <Trans i18nKey="(meaning: verb) The word 'Archive' used as a verb, i.e. to store information.">
        Archive
      </Trans>
      <br />
    </>
  );
};
