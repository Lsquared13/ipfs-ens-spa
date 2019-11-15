import { Action } from 'redux';
import actionCreatorFactory from 'typescript-fsa';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getDeployment, listDeployments } from '../../services';
import { DeployName, DeployItem } from '../../types';
import { AppState } from '../store';
import {} from '../sharedTypes';

// What's 'typescript-fsa'?
//
// actionCreator simplifies making all of these actions
// typed.  It requires one generic argument for the payload,
// and one value argument for the type.  They also provide
// "isType" function which accepts an action creator and
// and an action, only returns true if the action was of that type.
const actionCreator = actionCreatorFactory('deploy');

export const resetNewDeploy = actionCreator<void>('reset-new');

export const updateNewDeploy = actionCreator<{
  field: string,
  value: string
}>('update-new');

export const saveDeploys = actionCreator<DeployItem[]>('deploy/save-deploys')

export const fetchDeploys:() => ThunkAction<Promise<void>, AppState, {}, Action> = () => {
  return async (dispatch:ThunkDispatch<AppState, {}, Action>, getState) => {
    const deployments = await listDeployments();
    dispatch(saveDeploys(deployments));
  }
}

export const fetchDeploy:(name:string)=>ThunkAction<Promise<void>, AppState, {}, Action> = () => {
  return async (dispatch:ThunkDispatch<AppState, {}, Action>, getState) => {
    const deployment = await getDeployment(name);
    dispatch(saveDeploys([deployment]));
  }
}