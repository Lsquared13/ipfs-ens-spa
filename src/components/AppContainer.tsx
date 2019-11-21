import React, { FC } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import { globalHistory } from '@reach/router';
import { QueryParamProvider } from 'use-query-params';
import Footer from './Footer';
import Box from './sharedUI/Box';

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
      <Box flex='grow' dangerouslySetInlineStyle={{
        minWidth: '60%',
        maxWidth: '60%',
        marginTop: '6em',
        marginLeft: '20%',
        marginRight: '20%'
      }}>
        {children}
      </Box>
      <Footer />
    </QueryParamProvider>
  )
}

export default AppContainer;