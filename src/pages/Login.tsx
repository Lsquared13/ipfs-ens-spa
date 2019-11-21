import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import { useQueryParam, StringParam } from 'use-query-params';
import { Box, Button } from '../components/sharedUI';
import { AppState } from '../state/store';
import { GitActions, GitSelectors } from '../state/GitDuck';
import { AsyncDispatch } from '../state/sharedTypes';
import { Git } from '../services';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';
import SelectList from '../components/sharedUI/SelectList';


interface StateProps {
  token: string | null,
  gitLoginUrl: Git['loginUrl']
  authLoading: boolean
  userLoading: boolean
  user: GitTypes.User | null
  auth: GitTypes.Auth | null
  error: any
}

interface DispatchProps {
  fetchAuth: (code: string) => void
  fetchUser: () => void
}
export interface LoginPageProps extends RouteComponentProps {

}

const LoginPage: FC<LoginPageProps & StateProps & DispatchProps> = (props) => {
  const {
    token, gitLoginUrl, user, auth, fetchAuth, fetchUser,
    userLoading, authLoading, error
  } = props;
  // use-query-param library seamlessly handles grabbing & parsing this value
  const [code, setCode] = useQueryParam('code', StringParam);

  useEffect(function fetchTokenWithCode() {
    if (!code) return;
    if (token || authLoading || error) return;
    console.log('Have code, no token, auth not loading; fetching an access token');
    fetchAuth(code);
  }, [code, token, authLoading, fetchAuth, error]);

  useEffect(function fetchUserWithToken() {
    if (!token) return;
    if (user || userLoading || error) return;
    // TODO: Remove code from query once we know loop is behaving
    // setCode('');
    console.log('Have token, no user, userLoading is false; fetching user');
    fetchUser();
  }, [token, user, userLoading, fetchUser])

  let content;

  content = (
    // By default, show them the login button.
    <a href={gitLoginUrl.url}>
      <Button>Sign in with GitHub</Button>
    </a>
  )

  if (code && !token) content = (
    // We have a code, but no token -- must be waiting for
    // a response to tokenFetch.
    <p>Getting an OAuth token, please wait...</p>
  )

  if (token && !user) content = (
    // We have a token, but no user -- must be waiting for
    // GitHub to respond with the authenticatedUser() call
    <p>Getting username from your profile, please wait...</p>
  )

  if (token && user) content = (
    // Unsure if this will ever be visible to the user; if
    // both of those data points are available, the `AuthGateway`
    // lets users through to the app.  Leaving it here for
    // debugging purposes.
    <p>Login complete!  You should see the new deployment form now.</p>
  )

  if (error) content = (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  )

  return (
    <>
      <h1>Welcome to IPFS ENS Deployer</h1>
      {content}
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  const github = GitSelectors.buildApi.Git(state)
  return {
    gitLoginUrl: github.loginUrl,
    token: github.oauthToken,
    authLoading: state.git.authLoading,
    userLoading: state.git.userLoading,
    user: GitSelectors.getUser(state),
    auth: GitSelectors.getAuth(state),
    error: GitSelectors.getErr(state)
  }
}

const mapDispatchToProps = (dispatch: AsyncDispatch, ownProps: LoginPageProps) => {
  return {
    fetchAuth: (code: string) => dispatch(GitActions.fetchAuth(code)),
    fetchUser: () => dispatch(GitActions.fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);