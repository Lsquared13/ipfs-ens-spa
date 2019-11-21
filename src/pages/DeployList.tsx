import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DeployItem } from '@eximchain/ipfs-ens-types/spec/deployment';
import { Box } from '../components/sharedUI';
import DeploymentTable from '../components/DeploymentTable';

export interface DeployListPageProps extends RouteComponentProps {
  deployments?: DeployItem[]
}

export const DeployListPage: FC<DeployListPageProps> = (props) => {
  // TODO: Add the Deployment Table and a heading
  const deployments:DeployItem[] = props.deployments || [];
  return (
    <Box>
      <h1>Deployments</h1>
      <DeploymentTable deployments={deployments} />
    </Box>
  )
}

export default DeployListPage;