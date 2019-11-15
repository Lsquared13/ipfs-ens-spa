import { reducerWithInitialState } from "typescript-fsa-reducers";
import { saveAuth, saveBranches, saveRepos, saveUser } from './actions';
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
  .case(saveAuth, (state, auth) => Object.assign({}, state, { auth }))
  .case(saveUser, (state, user) => Object.assign({}, state, { user }))
  .case(saveRepos, (state, repos) => Object.assign({}, state, { repos }))
  .case(saveBranches, (state, { repo, branches }) => Object.assign({}, state, { 
    repos : Object.assign(state.repos, { [repo] : branches })
  }))

export default GitReducer;