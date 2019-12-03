import Octokit from '@octokit/rest';
import parse from 'parse-link-header';
import range from 'lodash.range';
import { oauthLoginUrl, Result as LoginUrl } from '@octokit/oauth-login-url';
import parseLinkHeader from 'parse-link-header';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';

const GITHUB_CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID as string;

const REQUIRED_AUTH_SCOPES:string[] = ['read:user','repo'];

export class Git {
  constructor(oauthToken:string|null) {
    this.oauthToken = oauthToken;
    this.API = oauthToken ? new Octokit({ auth : oauthToken}) : new Octokit();
    const redirectUrl = `https://${window.location.hostname}${window.location.pathname}`;
    console.log('Found following redirect URL: ',redirectUrl)
    this.loginUrl = oauthLoginUrl({
      clientId: GITHUB_CLIENT_ID as string,
      redirectUrl: redirectUrl,
      scopes: REQUIRED_AUTH_SCOPES
    })
  }
  API:Octokit
  oauthToken:string|null
  loginUrl:LoginUrl

  private requireAuth() {
    if (!this.oauthToken) throw new Error('You must be logged in to call this method.')
  }

  private getMissingPageRange(link:parseLinkHeader.Links):number[] {
    return range(
      parseInt(link['next'].page), 
      parseInt(link['last'].page)
    );
  }

  async getUserDetails() {
    this.requireAuth();
    const res = await this.API.users.getAuthenticated();
    return res.data;
  }

  async getRepoList():Promise<GitTypes.Repo[]> {
    this.requireAuth()
    const { data, headers } = await this.API.repos.list();
    if (!headers.link) return data;
    const allElts = [...data];
    const link = parseLinkHeader(headers.link) as parseLinkHeader.Links;
    for (var page of this.getMissingPageRange(link)) {
      const res = await this.API.repos.list({ page });
      allElts.push(...res.data);
    }
    return allElts;
  }

  async getBranches(owner: string, repo:string):Promise<GitTypes.Branch[]> {
    this.requireAuth()
    const { data, headers } = await this.API.repos.listBranches({ owner, repo, per_page: 100 });
    if (!headers.link) return data;
    const allElts = [...data];
    const link = parseLinkHeader(headers.link) as parseLinkHeader.Links;
    for (var page of this.getMissingPageRange(link)) {
      const res = await this.API.repos.listBranches({ owner, repo, page });
      allElts.push(...res.data);
    }
    return allElts;
  }
}