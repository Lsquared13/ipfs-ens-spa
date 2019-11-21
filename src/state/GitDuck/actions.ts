
import actionCreatorFactory from 'typescript-fsa';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';
import { AsyncAction, AsyncDispatch } from '../sharedTypes';
import { buildApi } from './selectors';

// actionCreator simplifies making all of these actions
// typed.  It requires one generic argument for the payload,
// and one value argument for the type.  They also provide
// "isType" function which accepts an action creator and
// and an action, only returns true if the action was of that type.
const actionCreator = actionCreatorFactory('git');

export const saveAuth = actionCreator<GitTypes.Auth>('save-auth');
export const setAuthLoading = actionCreator<boolean>('auth-loading')

export const saveUser = actionCreator<GitTypes.User>('save-user');
export const setUserLoading = actionCreator<boolean>('user-loading');

export const saveRepos = actionCreator<GitTypes.Repo[]>('save-repos');
export const setReposLoading = actionCreator<boolean>('repos-loading');

export const saveBranches = actionCreator<{ repo:string, branches: GitTypes.Branch[] }>('save-branches')
export const setBranchesLoading = actionCreator<boolean>('branches-loading');


export const fetchAuth:(code:string) => AsyncAction = (code) => {
  return async (dispatch:AsyncDispatch, getState) => {
    dispatch(setAuthLoading(true));
    const Deployer = buildApi.Deployer(getState());
    const auth = await Deployer.login(code);
    dispatch(saveAuth(auth))
    dispatch(setAuthLoading(false));
  }
}

export const fetchUser:() => AsyncAction = () => {
  return async (dispatch:AsyncDispatch, getState) => {
    dispatch(setUserLoading(true));
    const git = buildApi.Git(getState());
    if (!git) throw new Error('Cannot fetch user without a token.')
    const user = await git.getUserDetails();
    dispatch(saveUser(user));
    dispatch(setUserLoading(false));
  }
}

export const fetchRepos:() => AsyncAction = () => {
  return async (dispatch:AsyncDispatch, getState) => {
    dispatch(setReposLoading(true));
    const git = buildApi.Git(getState());
    if (!git) throw new Error('Cannot fetch repos without a token.')
    const repos = await git.getRepoList();
    dispatch(saveRepos(repos));
    dispatch(setReposLoading(false));
  }
}

export const fetchBranches:(owner:string, repo:string) => AsyncAction = (owner, repo) => {
  return async (dispatch:AsyncDispatch, getState) => {
    dispatch(setBranchesLoading(true));
    const git = buildApi.Git(getState());
    if (!git) throw new Error('Cannot fetch branches without a token.');
    const branches = await git.getBranches(owner, repo);
    dispatch(saveBranches({
      repo: `${owner}/${repo}`, branches
    }));
    dispatch(setBranchesLoading(false));
  }
}