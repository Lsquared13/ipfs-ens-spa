import { createSelector } from 'reselect';
import { AppState } from '../store';

export const getDeployState = (state:AppState) => state.deploy;

export const getDeploys = createSelector(getDeployState, deploy => deploy.deploys);

export const getNewDeploy = createSelector(getDeployState, deploy => deploy.newDeploy);

export const newDeployValid = createSelector(getNewDeploy, newDeploy => {
  return Object.values(newDeploy).every(val => val !== '')
})