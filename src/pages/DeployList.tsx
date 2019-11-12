import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box } from '../components/sharedUI';
import DeploymentTable from '../components/DeploymentTable';
import { Deployment } from '../types';

export interface DeployListPageProps extends RouteComponentProps {
  deployments?: Deployment[]
}

export const DeployListPage: FC<DeployListPageProps> = (props) => {
  // TODO: Add the Deployment Table and a heading
  const deployments:Deployment[] = props.deployments || [];
  return (
    <Box>
      <h1>Deployments</h1>
      <DeploymentTable deployments={deployments} />
    </Box>
  )
}

export default DeployListPage;