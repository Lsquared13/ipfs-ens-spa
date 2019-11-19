import { reducerWithInitialState } from "typescript-fsa-reducers";
import { 
  saveAuth, saveBranches, saveRepos, saveUser ,
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
  .case(saveAuth, (state, auth) => Object.assign({}, state, { auth }))
  .case(setAuthLoading, (state, authLoading) => Object.assign({}, state, { authLoading }))
  .case(saveUser, (state, user) => Object.assign({}, state, { user }))
  .case(setUserLoading, (state, userLoading) => Object.assign({}, state, { userLoading }))
  .case(saveRepos, (state, repos) => Object.assign({}, state, { repos }))
  .case(setReposLoading, (state, reposLoading) => Object.assign({}, state, { reposLoading }))
  .case(saveBranches, (state, { repo, branches }) => Object.assign({}, state, { 
    repos : Object.assign(state.repos, { [repo] : branches })
  }))
  .case(setBranchesLoading, (state, branchesLoading) => Object.assign({}, state, { branchesLoading }))

export default GitReducer;