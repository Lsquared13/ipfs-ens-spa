import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Button } from '../components/sharedUI';

export interface LoginPageProps extends RouteComponentProps {

}

export const LoginPage: FC<LoginPageProps> = (props) => {
  // TODO: Add a "Login with GitHub" button, along with some
  // basic info about what the thing is
  const beginLogin = () => {
    // TODO: Actually trigger call to our Lambda
  }
  return (
    <Box alignContent='center'>
      <h1>Login to IPFS ENS Deployer</h1>
      <Button onClick={beginLogin}>Sign in with GitHub</Button>
    </Box>
  )
}

export default LoginPage;