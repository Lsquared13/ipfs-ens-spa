import React, { FC } from 'react';
import { connect } from 'react-redux';
import { DeployActions, DeploySelectors } from '../../state/DeployDuck';

import RepoStage from './Stage1-Repo';
import BranchStage from './Stage2-Branch';
import BuildStage from './Stage3-Build';
import ConfirmStage from './Stage4-Confirm';
import { AppState } from '../../state/store';
import { DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';

export * from './Stage1-Repo';
export * from './Stage2-Branch';
export * from './Stage4-Confirm';

interface StateProps {

}


const NewDeployFlowRouter:FC<StateProps & DeployArgs> = (props) => {
  const { ensName, repo, owner, branch, packageDir, buildDir } = props;
  
  if (repo === '' || owner === '') {
    return <RepoStage />
  }

  if (branch === '') {
    return <BranchStage />
  }

  if (ensName === '' || packageDir === '' || buildDir === '') {
    return <BuildStage />
  }

  return <ConfirmStage />
};

const mapStateToProps = (state:AppState) => {
  return {
    ...DeploySelectors.getNewDeploy(state)
  }
}

export const NewDeployFlow = connect(mapStateToProps)(NewDeployFlowRouter);

export default connect(mapStateToProps)(NewDeployFlow);