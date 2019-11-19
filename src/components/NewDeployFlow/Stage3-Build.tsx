import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import { GitTypes, DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, DeploySelectors } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import { Button, StringField } from '../sharedUI';

interface StateProps {
  
}

interface DispatchProps {
  updateNewDeploy: (field:keyof DeployArgs, value:string) => void
}

export interface BranchStageProps {

}

const BranchStage: FC<BranchStageProps & StateProps & DispatchProps> = (props) => {
  const { updateNewDeploy } = props;

  const [ensState, setEnsState] = useState('');
  const [pkgDir, setPkgDir] = useState('./');
  const [buildDir, setBuildDir] = useState('./build');

  function setValues(){
    updateNewDeploy('ensName', ensState);
    updateNewDeploy('packageDir', pkgDir);
    updateNewDeploy('buildDir', buildDir);
  }

  return (
    <>
      <h2>Please configure your deployment's details:</h2>
      <StringField name='ENS Name' value={ensState} onChange={setEnsState} />
      <StringField name='Package Directory' value={pkgDir} onChange={setPkgDir} />
      <StringField name='Build Directory' value={buildDir} onChange={setBuildDir} />
      <Button onClick={setValues}>Proceed</Button>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => {
  return {
    updateNewDeploy: (field:keyof DeployArgs, value:string) => dispatch(DeployActions.updateNewDeploy({ field, value }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchStage);