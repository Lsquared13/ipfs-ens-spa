import Octokit from '@octokit/rest';
import { oauthLoginUrl, Result as LoginUrl } from '@octokit/oauth-login-url';

const baseAuthParams = {
  clientId: process.env.REACT_APP_OAUTH_CLIENT_ID as string
}

const GITHUB_CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID as string;


export const githubLoginUrl = oauthLoginUrl({
  clientId: GITHUB_CLIENT_ID as string,
  redirectUrl: process.env.PUBLIC_URL,
  scopes: []
})

export class Git {
  constructor(oauthToken:string|null) {
    this.oauthToken = oauthToken;
    this.API = oauthToken ? new Octokit({ auth : oauthToken}) : new Octokit();
    this.loginUrl = oauthLoginUrl({
      clientId: GITHUB_CLIENT_ID as string,
      redirectUrl: process.env.PUBLIC_URL,
      scopes: []
    })
  }
  API:Octokit
  oauthToken:string|null
  loginUrl:LoginUrl

  private requireAuth() {
    if (!this.oauthToken) throw new Error('You must be logged in to call this method.')
  }

  async getUserDetails() {
    this.requireAuth();
    const res = await this.API.users.getAuthenticated();
    return res.data;
  }

  async getRepoList() {
    this.requireAuth()
    const res = await this.API.repos.list();
    return res.data;
  }

  async getBranches(owner: string, repo:string) {
    this.requireAuth()
    const res = await this.API.repos.listBranches({ owner, repo });
    return res.data;
  }
}