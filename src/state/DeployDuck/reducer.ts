import { reducerWithInitialState } from "typescript-fsa-reducers";
import keyBy from 'lodash.keyby';
import { newDeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';
import { DeployState } from './types';
import { 
  resetNewDeploy, updateNewDeploy, saveDeploys,
  deploysLoading, newDeployLoading
} from './actions';

const initialState:DeployState = {
  deploys: {},
  error: null,
  deploysLoading: false,
  newDeploy: newDeployArgs(),
  newDeployLoading: false
}

export const DeployReducer = reducerWithInitialState(initialState)
  .case(resetNewDeploy, (state) => Object.assign({}, state, { newDeploy: newDeployArgs() }))
  .case(updateNewDeploy, (state, { field, value }) => {
    const newDeploy = Object.assign({}, state.newDeploy, { [field]: value })
    return Object.assign({}, state, { newDeploy });
  })
  .case(saveDeploys, (state, deploys) => Object.assign({}, state, {
    deploys: keyBy(deploys, deploy => deploy.ensName)
  }))
  .case(deploysLoading, (state, deploysLoading) => Object.assign({}, state, { deploysLoading }))
  .case(newDeployLoading, (state, newDeployLoading) => Object.assign({}, state, { newDeployLoading }))

export default DeployReducer;