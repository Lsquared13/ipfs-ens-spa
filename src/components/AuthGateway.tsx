import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { LoginPage } from '../pages';
import { GitSelectors } from '../state/GitDuck';
import { AppState } from '../state/store';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';

export interface AuthCheckerProps extends RouteComponentProps {
  
}

interface StateProps {
  oauthToken: string | null
  user: GitTypes.User | null
}

/**
 * Component does not render any user interface, its responsibility is
 * to determine whether the current user is authenticated.  If they are
 * not, then 
 * @param props 
 */
const AuthGatewayPresentational:FC<AuthCheckerProps & StateProps> = ({ children, ...props }) => {
  const { user, oauthToken } = props;

  // For now, there's a simpler solution than redirecting the user to
  // an auth page.  The entire app's routing won't be shown unless the
  // user is logged in.  There are no redirects involved, so their path
  // will be preserved when we render this router's regular children again.
  return user !== null && oauthToken !== null ? 
    <>{children}</> : (
    <LoginPage {...props} />
  )
}

const mapStateToProps = (state:AppState) => {
  return {
    oauthToken: GitSelectors.getToken(state),
    user: GitSelectors.getUser(state)
  }
}

export const AuthGateway = connect(mapStateToProps)(AuthGatewayPresentational);
export default AuthGateway;