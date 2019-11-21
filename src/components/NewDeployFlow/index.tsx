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
import { NavigateFn } from '@reach/router';

export * from './Stage1-Repo';
export * from './Stage2-Branch';
export * from './Stage4-Confirm';

export interface NewDeployFlowProps {
  navigate: NavigateFn | undefined
}
interface StateProps extends DeployArgs {

}

interface DispatchProps {
  restart: () => void
}

const WithReset:FC<DispatchProps & { goHome: () => void }> = ({ children, restart, goHome }) => {
  return (
    <>
      { children }
      <Button onClick={restart}>Restart Process</Button>
      <Button onClick={goHome}>Go Home</Button>
    </>
  )
}

const NewDeployFlowRouter:FC<NewDeployFlowProps & StateProps & DispatchProps> = (props) => {
  const { ensName, repo, owner, branch, packageDir, buildDir, restart, navigate } = props;
  
  function goHome(){ navigate && navigate('/') }

  const flowProps = { restart, goHome };

  if (repo === '' || owner === '') {
    return (
      <WithReset {...flowProps}>
        <RepoStage />
      </WithReset>
    )
  }

  if (branch === '') {
    return (
      <WithReset {...flowProps}>
        <BranchStage />
      </WithReset>
    )
  }

  if (ensName === '' || packageDir === '' || buildDir === '') {
    return (
      <WithReset {...flowProps}>
        <BuildStage />
      </WithReset>
    )
  }

  return (
    <WithReset {...flowProps}>
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