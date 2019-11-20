import React, { useState, FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { GitTypes, DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, DeploySelectors } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import { Button } from '../sharedUI';

interface StateProps {
  newDeploy: DeployArgs
  loading: boolean
}

interface DispatchProps {
  startDeploy: (args:DeployArgs) => void
}

export interface ConfirmStageProps {

}

const ConfirmStage: FC<ConfirmStageProps & StateProps & DispatchProps> = (props) => {
  const { newDeploy, startDeploy, loading } = props;
  const deployName = newDeploy.ensName;

  return (
    <>
      <h2>Please confirm your deployment's details:</h2>
      <dl>
        { Object.keys(newDeploy).map(field => {
          return (
            <Fragment key={field}>
              <dt>{field}</dt>
              <dd>{newDeploy[field as keyof DeployArgs]}</dd>
            </Fragment>
          )
        }) }
      </dl>
      <Button onClick={()=>startDeploy(newDeploy)}>Create Deployment</Button>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    newDeploy : DeploySelectors.getNewDeploy(state),
    loading: DeploySelectors.isLoading.newDeploy(state)
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