import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, DeploySearch, NewDeployFlow } from '../components/';

export interface NewDeployPageProps extends RouteComponentProps {

}

export const NewDeployPage: FC<NewDeployPageProps> = (props) => {
  return (
    <Box>
      <h1>IPFS ENS Deployer</h1>
      <h2>View Deployment</h2>
      <DeploySearch navigate={props.navigate} />
      <h2>New Deployment</h2>
      <NewDeployFlow />
    </Box>
  )
}

export default NewDeployPage;