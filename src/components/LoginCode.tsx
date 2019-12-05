import React, { FC } from 'react';
import Alert from 'react-s-alert';
import copy, {} from 'copy-to-clipboard';

export interface LoginCodeProps {
  code?: string
}

export const LoginCode: FC<LoginCodeProps> = ({ code }) => {
  function copyCode(){
    if (!code) {
      Alert.error(`Attempted to copy code to clipboard with no code present; bad code path.`);
      return;
    }
    const copySuccess = copy(code);
    if (copySuccess) {
      Alert.success(`
        <p>Copied code to clipboard!</p>
        <br />
        <p>Paste into your terminal and your CLI installation will be logged into GitHub.</p>
      `, { html: true })
    } else {
      Alert.error('Unable to automatically copy code to your clipboard; please manually copy-paste.')
    }
  }

  if (code) {
    return (
      <>
        <div className='LoginCode' onClick={copyCode}>
          <code>{code}</code>
          <br /><br />
          <span className='codeExplanation'>Click to Copy, then paste into the CLI!</span>
        </div>
        <p>This is a one-time code to get an OAuth token, not the token itself.</p>
        <p>The CLI will retrieve a token and save it to your machine; we never store your tokens.</p>
      </>
    )
  } else {
    return (
      <>
        <p>Please install the CLI as shown below.</p>
        <p>When you call <span className='codeText'>deployer login</span>, you will be redirected here and given a code to paste back into your terminal.</p>
      </>
    )
  }
}