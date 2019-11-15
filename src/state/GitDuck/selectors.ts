import { createSelector } from 'reselect';
import { AppState } from '../store';

export const getGitState = (state:AppState) => state.git;

export const getAuth = createSelector(getGitState, git => git.auth);
export const getUser = createSelector(getGitState, git => git.user);
export const getRepos = createSelector(getGitState, git => git.repos);
export const getBranches = createSelector(getGitState, git => git.branches);

export const haveAuth = createSelector(getAuth, auth => auth !== null);