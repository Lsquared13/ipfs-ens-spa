import { createOAuthAppAuth } from "@octokit/auth-oauth-app";

const baseAuthParams = {
  clientId: process.env.REACT_APP_OAUTH_CLIENT_ID as string,
  clientSecret: process.env.REACT_APP_OATH_CLIENT_SECRET as string,
}

const basePath = 'https://github.com';
const loginPath = `${basePath}/login/oauth/authorize`

export const GitHubAuth = createOAuthAppAuth(baseAuthParams);

export function authFromCode(code:string) {
  return createOAuthAppAuth({ code, ...baseAuthParams });
}