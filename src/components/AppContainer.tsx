import React, { FC } from 'react';
import Alert from 'react-s-alert';
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
export const AppContainer:FC = ({ children }) => {
  const footer = null;
  console.log('test')
  return (
    <QueryParamProvider reachHistory={globalHistory}>
      <Alert />
        <Box flex='grow' paddingX={12} paddingY={4} marginLeft={12} width='100%' alignContent='center'>
        { children }
        </Box>
      <Footer />
    </QueryParamProvider>
  )
}

export default AppContainer;