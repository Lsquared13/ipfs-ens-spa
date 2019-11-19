import { createSelector } from 'reselect';
import { getToken } from '../GitDuck/selectors';
import { AppState } from '../store';
import { Deployer } from '../../services';

export const getDeployState = (state:AppState) => state.deploy;

export const getDeploys = createSelector(getDeployState, deploy => deploy.deploys);

export const getNewDeploy = createSelector(getDeployState, deploy => deploy.newDeploy);

export const newDeployValid = createSelector(getNewDeploy, newDeploy => {
  return Object.values(newDeploy).every(val => val !== '')
})