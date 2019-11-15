import React, { FC } from 'react';
import { DeployItem } from '../types';
import { Table } from './sharedUI';

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
  const columns = Object.keys(deployments[0]).map(key => {
    return { field: key }
  })

  return (
    <Table columns={columns} records={deployments} />
  )
}

export default DeploymentTable;