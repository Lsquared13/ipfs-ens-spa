import { reducerWithInitialState } from "typescript-fsa-reducers";
import { mergedState } from '..';
import { 
  saveAuth, saveBranches, saveRepos, saveUser, setError,
  setAuthLoading, setBranchesLoading, setReposLoading, setUserLoading
} from './actions';
import { GitState } from './types';

const initialState:GitState = {
  auth: null,
  user: null,
  repos: [],
  branches: {},
  error: null,
  authLoading: false,
  userLoading: false,
  reposLoading: false,
  branchesLoading: false
}

export const GitReducer = reducerWithInitialState(initialState)
  .case(saveAuth, (state, auth) => mergedState(state, { auth }))
  .case(setAuthLoading, (state, authLoading) => mergedState(state, { authLoading }))
  .case(saveUser, (state, user) => mergedState(state, { user }))
  .case(setUserLoading, (state, userLoading) => mergedState(state, { userLoading }))
  .case(saveRepos, (state, repos) => mergedState(state, { repos }))
  .case(setReposLoading, (state, reposLoading) => mergedState(state, { reposLoading }))
  .case(saveBranches, (state, { repo, branches }) => mergedState(state, {
    repos: mergedState(state.repos, { [repo] : branches })
  }))
  .case(setBranchesLoading, (state, branchesLoading) => mergedState(state, { branchesLoading }))
  .case(setError, (state, error) => mergedState(state, { error }))

export default GitReducer;