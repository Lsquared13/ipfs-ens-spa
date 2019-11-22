import React, { useState, FC, Fragment } from 'react';
import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';
import { DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, DeploySelectors } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import { Button } from '../sharedUI';
import ApiError from '../ApiErr';

interface StateProps {
  newDeploy: DeployArgs
  loading: boolean
  error: any
}

interface DispatchProps {
  startDeploy: (args:DeployArgs) => void
}

export interface ConfirmStageProps {
  goHome: () => void
}

const ConfirmStage: FC<ConfirmStageProps & StateProps & DispatchProps> = (props) => {
  const { newDeploy, startDeploy, loading, error, goHome } = props;

  function confirm() {
    startDeploy(newDeploy);
    goHome();
  }
  return (
    <>
      <p>Please confirm your deployment's details:</p>
      <JSONPretty id='confirmArgs' data={newDeploy} />
      {
        error && <ApiError error={error} />
      }
      <Button disabled={loading} onClick={confirm}>Create Deployment</Button>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    newDeploy : DeploySelectors.getNewDeploy(state),
    loading: DeploySelectors.isLoading.newDeploy(state),
    error: DeploySelectors.getErr(state)
  }
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => {
  return {
    startDeploy: (args:DeployArgs) => {
      console.log('Trigger to createDeployment actions w/ following args: ',args);
      dispatch(DeployActions.createDeploy(args));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmStage);