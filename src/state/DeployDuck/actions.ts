import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { DeployItem, DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';
import { AsyncAction, AsyncDispatch } from '../sharedTypes';
import { buildApi } from '../GitDuck/selectors';
import { AppState } from '../store';

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
  field: keyof DeployArgs,
  value: string
}>('update-new');

export const saveDeploys = actionCreator<DeployItem[]>('save-deploys');

export const deploysLoading = actionCreator<boolean>('deploys-loading');

export const newDeployLoading = actionCreator<boolean>('new-deploy-loading');

export const fetchDeploys: () => AsyncAction = () => {
  return async (dispatch: AsyncDispatch, getState) => {
    dispatch(deploysLoading(true));
    const Deployer = buildApi.Deployer(getState());
    const deployments = await Deployer.listDeployments();
    dispatch(saveDeploys(deployments));
    dispatch(deploysLoading(false));
  }
}

export const fetchDeploy: (name: string) => AsyncAction = (name) => {
  return async (dispatch: AsyncDispatch, getState) => {
    dispatch(deploysLoading(true));
    const Deployer = buildApi.Deployer(getState());
    const deployment = await Deployer.getDeployment(name);
    dispatch(saveDeploys([deployment]));
    dispatch(deploysLoading(false));
  }
}

export const createDeploy: (args: DeployArgs) => AsyncAction = (args) => {
  return async (dispatch: AsyncDispatch, getState) => {
    dispatch(newDeployLoading(true));
    const Deployer = buildApi.Deployer(getState());
    const createRes = await Deployer.createDeployment(args);
    console.log('We got a create response', createRes);
    console.log('Throwing away newDeploy: ',args);
    dispatch(resetNewDeploy())
    dispatch(newDeployLoading(false));

    // Wait for 3/4s of a second then refresh our deploy list
    await sleep(750);
    dispatch(fetchDeploys())
  }
}

function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(() => res(null), ms);
  })
} 