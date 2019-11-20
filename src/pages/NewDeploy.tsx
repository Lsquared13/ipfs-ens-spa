import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, DeploySearch, NewDeployFlow } from '../components/';

export interface NewDeployPageProps extends RouteComponentProps {

}

export const NewDeployPage: FC<NewDeployPageProps> = (props) => {
  return (
    <Box>
      <h1>View Deployment</h1>
      <DeploySearch navigate={props.navigate} />
      <h1>New Deployment</h1>
      <NewDeployFlow />
    </Box>
  )
}

export default NewDeployPage;