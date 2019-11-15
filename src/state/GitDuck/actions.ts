
import actionCreatorFactory from 'typescript-fsa';
import { GitBranch, GitRepo, GitUser, GitAuth} from './types';
import { AsyncAction, AsyncDispatch } from '../sharedTypes';
import { AppState } from '../store';

// actionCreator simplifies making all of these actions
// typed.  It requires one generic argument for the payload,
// and one value argument for the type.  They also provide
// "isType" function which accepts an action creator and
// and an action, only returns true if the action was of that type.
const actionCreator = actionCreatorFactory('git');

export const saveAuth = actionCreator<GitAuth>('git/save-auth');

export const saveUser = actionCreator<GitUser>('git/save-user');

export const saveRepos = actionCreator<GitRepo[]>('git/save-repos');

export const saveBranches = actionCreator<{ repo:string, branches: GitBranch }>('git/save-branches')


export const fetchAuth:(code:string) => AsyncAction = (code) => {
  return async (dispatch:AsyncDispatch, getState) => {

  }
}

export const fetchUser:() => AsyncAction = () => {
  return async (dispatch:AsyncDispatch, getState) => {

  }
}

export const fetchRepos:() => AsyncAction = () => {
  return async (dispatch:AsyncDispatch, getState) => {
    
  }
}

export const fetchBranches:(fullRepoName:string) => AsyncAction = () => {
  return async (dispatch:AsyncDispatch, getState) => {
    
  }
}