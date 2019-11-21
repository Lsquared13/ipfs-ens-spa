import React, { FC } from 'react';
import { Table } from './sharedUI';
import { DeployItem, newDeployItem } from '@eximchain/ipfs-ens-types/spec/deployment';

export interface DeploymentTableProps {
  deployments: DeployItem[]
}

export const DeploymentTable:FC<DeploymentTableProps> = (props) => {
  const { deployments } = props;
  
  if (deployments.length === 0) {
    return (
      <div>
        <h3>No Deployments Found</h3>
      </div>
    )
  }

  return (
    <Table columns={[
      { field: 'ensName' },
      { field: 'username' },
      { field: 'repo' },
      { field: 'createdAt' }
    ]} records={deployments} />
  )
}

export default DeploymentTable;