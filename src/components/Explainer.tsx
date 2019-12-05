import React, { FC } from 'react';
import Typist from 'react-typist';

export interface ExplainerProps {

}

export const Explainer:FC = (props) => {
  return (
    <>
      <h2>What is the IPFS-ENS Deployer?</h2>
      <p>
        Want to put your Dapp on the only truly decentralized hosting system?
      </p>
      <p>
        You can build it, zip it, upload it to IPFS, buy an ENS domain, and then add a custom resolver pointed to the IPFS hash.
      </p>
      <p>
        Or you could just use our free tool:
      </p>
      <Typist className='codeBlock'>
        <code>$ npm i -g @eximchain/ipfs-ens-cli</code>
        <br /><br />
        <code>$ deployer login</code>
        <br /><br />
        <code>$ deployer create</code>
      </Typist>
    </>
  )
}

export default Explainer;