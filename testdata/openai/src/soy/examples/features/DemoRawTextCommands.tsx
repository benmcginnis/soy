import * as React from 'react';

/**
 * Demo raw text commands.
 */
export const DemoRawTextCommands = () => {
  return (
    <>
            <pre>
            // Special characters.
            Space       : AA{' '}BB<br/>
            Empty string: AA{''}BB<br/>
            New line    : AA{'\n'}BB<br/>
            Carriage ret: AA{'\r'}BB<br/>
            Tab         : AA{'\t'}BB<br/>
            Left brace  : AA{'{'}BB<br/>
            Right brace : AA{'}'}BB<br/>

            // Literal block.
            // Note: Lines are not joined and indentation is not stripped, so the new line and 2-space indent
            // between 'CC' and 'DD' will appear in the output exactly as written.
            Literal     : {`AA	BB { CC
            DD } EE {sp}{\n}{rb} FF`}
            </pre>
    </>
  )
}