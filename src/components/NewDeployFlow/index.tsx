import React, { FC } from 'react';
import { connect } from 'react-redux';
import { DeployActions, DeploySelectors } from '../../state/DeployDuck';

import RepoStage from './Stage1-Repo';
import BranchStage from './Stage2-Branch';
import BuildStage from './Stage3-Build';
import ConfirmStage from './Stage4-Confirm';
import { AppState } from '../../state/store';
import { DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';
import { AsyncDispatch } from '../../state/sharedTypes';
import { Button } from '../sharedUI';

export * from './Stage1-Repo';
export * from './Stage2-Branch';
export * from './Stage4-Confirm';

interface StateProps extends DeployArgs {

}

interface DispatchProps {
  restart: () => void
}

const WithReset:FC<DispatchProps> = ({ children, restart }) => {
  return (
    <>
      { children }
      <Button onClick={restart}>Restart Process</Button>
    </>
  )
}

const NewDeployFlowRouter:FC<StateProps & StateProps & DispatchProps> = (props) => {
  const { ensName, repo, owner, branch, packageDir, buildDir, restart } = props;
  

  if (repo === '' || owner === '') {
    return (
      <WithReset restart={restart}>
        <RepoStage />
      </WithReset>
    )
  }

  if (branch === '') {
    return (
      <WithReset restart={restart}>
        <BranchStage />
      </WithReset>
    )
  }

  if (ensName === '' || packageDir === '' || buildDir === '') {
    return (
      <WithReset restart={restart}>
        <BuildStage />
      </WithReset>
    )
  }

  return (
    <WithReset restart={restart}>
      <ConfirmStage />
    </WithReset>
  )
};

const mapStateToProps = (state:AppState) => {
  return {
    ...DeploySelectors.getNewDeploy(state)
  }
}

const mapDispatchToProps = (dispatch:AsyncDispatch) => {
  return {
    restart: () => dispatch(DeployActions.resetNewDeploy())
  }
}

export const NewDeployFlow = connect(mapStateToProps, mapDispatchToProps)(NewDeployFlowRouter);

export default connect(mapStateToProps)(NewDeployFlow);