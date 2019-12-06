import React, { FC } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import { globalHistory } from '@reach/router';
import { QueryParamProvider } from 'use-query-params';
import Footer from './Footer';

/**
 * Outermost wrapper component on the application, provides for a default
 * footer and mounts any "initializer" components (e.g. react-s-alert's
 * <Alert /> elt, or react-request-hook's <RequestProvider />).
 * @param param0 
 */
export const AppContainer: FC = ({ children }) => {
  return (
    <QueryParamProvider reachHistory={globalHistory}>
      <Alert />
      <div className='AppWrapper'>
        {children}
      </div>
      <Footer />
    </QueryParamProvider>
  )
}

export default AppContainer;