import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';

interface AuthCheckerProps extends RouteComponentProps {

}

/**
 * Component does not render any user interface, its responsibility is
 * to determine whether the current user is authenticated.  If they are
 * not, then 
 * @param props 
 */
export const AuthChecker:FC<AuthCheckerProps> = ({ children }) => {

  // TODO: What data point will we be representing as "having auth"?
  // Need to depend on it.
  useEffect(function requireActiveAuth(){

  }, []);

  return <>{children}</>;
}

export default AuthChecker;