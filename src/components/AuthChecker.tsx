import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { LoginPage } from '../pages';

interface AuthCheckerProps extends RouteComponentProps {
  oauthToken: string | null
}

/**
 * Component does not render any user interface, its responsibility is
 * to determine whether the current user is authenticated.  If they are
 * not, then 
 * @param props 
 */
export const AuthChecker:FC<AuthCheckerProps> = ({ children, ...props }) => {

  // For now, there's a simpler solution than redirecting the user to
  // an auth page.  The entire app's routing won't be shown unless the
  // user is logged in.  There are no redirects involved, so their path
  // will be preserved when we render this router's regular children again.
  return props.oauthToken ? <>{children}</> : (
    <LoginPage {...props} />
  )
}

export default AuthChecker;