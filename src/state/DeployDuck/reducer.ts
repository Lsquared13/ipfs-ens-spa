import { reducerWithInitialState } from "typescript-fsa-reducers";
import keyBy from 'lodash.keyby';
import { newDeploySeed } from '../../types';
import { DeployState } from './types';
import { resetNewDeploy, updateNewDeploy, saveDeploys, fetchDeploys } from './actions';

const initialState:DeployState = {
  deploys: {},
  error: null,
  deploysLoading: false,
  newDeploy: newDeploySeed()
}

export const DeployReducer = reducerWithInitialState(initialState)
  .case(resetNewDeploy, (state) => Object.assign({}, state, { newDeploy: newDeploySeed() }))
  .case(updateNewDeploy, (state, { field, value }) => {
    const newDeploy = Object.assign({}, state.newDeploy, { [field]: value })
    return Object.assign({}, state, { newDeploy });
  })
  .case(saveDeploys, (state, deploys) => Object.assign({}, state, {
    deploys: keyBy(deploys, deploy => deploy.EnsDomain)
  }))

export default DeployReducer;