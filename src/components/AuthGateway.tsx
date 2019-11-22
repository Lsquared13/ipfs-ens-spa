import React, { FC, useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import useLocalStorage from 'react-use-localstorage';
import isEqual from 'lodash.isequal';
import { LoginPage } from '../pages';
import { GitSelectors, GitActions } from '../state/GitDuck';
import { GitState } from '../state/GitDuck/types';
import { AppState } from '../state/store';
import { AsyncDispatch } from '../state/sharedTypes';

export interface AuthCheckerProps extends RouteComponentProps {
  
}

interface StateProps {
  user: GitState['user']
  auth: GitState['auth']
}

interface DispatchProps {
  setAuth: (auth:GitState['auth']) => void
  setUser: (user:GitState['user']) => void
}

/**
 * Component does not render any user interface, its responsibility is
 * to determine whether the current user is authenticated.  If they are
 * not, then 
 * @param props 
 */
const AuthGatewayPresentational:FC<AuthCheckerProps & StateProps & DispatchProps> = ({ children, ...props }) => {
  const { user, auth, setAuth, setUser } = props;

  const [savedUserString, setSavedUserString] = useLocalStorage('user', JSON.stringify(user));
  function getSavedUser(){ return JSON.parse(savedUserString) }
  function setSavedUser(user:GitState['user']){ setSavedUserString(JSON.stringify(user)) }
  
  const [savedAuthString, setSavedAuthString] = useLocalStorage('auth', JSON.stringify(auth));
  function getSavedAuth(){ return JSON.parse(savedAuthString) }
  function setSavedAuth(auth:GitState['auth']) { setSavedAuthString(JSON.stringify(auth)) }

  useEffect(function loadStorageOnStart(){
    const savedUser = getSavedUser();
    const savedAuth = getSavedAuth();
    if (user === null && savedUser !== null) {
      setUser(savedUser);
    }
    if (auth === null && savedAuth !== null) {
      setAuth(savedAuth)
    }
  }, []);

  useEffect(function saveAuthUpdates(){
    const savedUser = getSavedUser();
    const savedAuth = getSavedAuth();
    if (!isEqual(savedUser, user)) {
      setSavedUser(user);
    }
    if (!isEqual(savedAuth, auth)) {
      setSavedAuth(auth);
    }
  }, [user, auth, savedUserString, savedAuthString])
  

  // For now, there's a simpler solution than redirecting the user to
  // an auth page.  The entire app's routing won't be shown unless the
  // user is logged in.  There are no redirects involved, so their path
  // will be preserved when we render this router's regular children again.
  return user !== null && auth !== null ? 
    <>{children}</> : (
    <LoginPage {...props} />
  )
}

const mapStateToProps = (state:AppState) => {
  return {
    auth: GitSelectors.getAuth(state),
    user: GitSelectors.getUser(state)
  }
}

const mapDispatchToProps = (dispatch:AsyncDispatch) => {
  return {
    setAuth: (auth:GitState['auth']) => dispatch(GitActions.saveAuth(auth)),
    setUser: (user:GitState['user']) => dispatch(GitActions.saveUser(user))
  }
}

export const AuthGateway = connect(mapStateToProps, mapDispatchToProps)(AuthGatewayPresentational);
export default AuthGateway;