import { reducerWithInitialState } from "typescript-fsa-reducers";
import keyBy from 'lodash.keyby';
import { newDeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';
import { mergedState } from '..';
import { DeployState } from './types';
import { 
  resetNewDeploy, updateNewDeploy, saveDeploys,
  deploysLoading, newDeployLoading, setError
} from './actions';

const initialState:DeployState = {
  deploys: {},
  error: null,
  deploysLoading: false,
  newDeploy: newDeployArgs(),
  newDeployLoading: false
}

export const DeployReducer = reducerWithInitialState(initialState)
  .case(resetNewDeploy, (state) => mergedState(state, { newDeploy : newDeployArgs() }))
  .case(updateNewDeploy, (state, { field, value }) => mergedState(state, {
    newDeploy: mergedState(state.newDeploy, { [field] : value })
  }))
  .case(saveDeploys, (state, deploys) => mergedState(state, {
    deploys: keyBy(deploys, deploy => deploy.ensName)
  }))
  .case(deploysLoading, (state, deploysLoading) => mergedState(state, { deploysLoading }))
  .case(newDeployLoading, (state, newDeployLoading) => mergedState(state, { newDeployLoading }))
  .case(setError, (state, error) => mergedState(state, { error }))

export default DeployReducer;