import OctokitOauthTypes from '@octokit/auth-oauth-app/dist-types/types';
import Octokit from '@octokit/rest';

export type GitAuth = OctokitOauthTypes.TokenAuthentication;
export type GitUser = Octokit.UsersGetAuthenticatedResponse;
export type GitRepo = Octokit.ReposListForOrgResponseItem;
export type GitBranch = Octokit.ReposListBranchesResponseItem;

export interface GitState {
  auth: GitAuth | null
  authLoading: boolean
  user: GitUser | null
  userLoading: boolean
  repos: GitRepo[]
  reposLoading: boolean
  branches: {
    [key:string]: GitBranch
  }
  branchesLoading: boolean
  error: any | null
}