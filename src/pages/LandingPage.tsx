import React, { FC } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { LoginCode, Explainer } from '../components';
import GlobeLogo from '../assets/Exim-Globe-Logo.png';
export interface LandingPageProps {

}

export const LandingPage:FC<LandingPageProps> = (props) => {
  const [code, setCode] = useQueryParam('code', StringParam);
  const [stateParam, setStateParam] = useQueryParam('state', StringParam);

  return (
    <>
      <h1 className='AppHeader'>
        <img src={GlobeLogo} style={{maxWidth: '4em', height: 'auto'}} />
        <span>IPFS-ENS Deployer Login</span>
      </h1>
      <LoginCode code={code} />
      <br /><br />
      <Explainer />
    </>
  )
}

export default LandingPage;