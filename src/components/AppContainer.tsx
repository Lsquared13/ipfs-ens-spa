import React, { FC } from 'react';
import Alert from 'react-s-alert';

/**
 * Outermost wrapper component on the application, provides for a default
 * footer and mounts any "initializer" components (e.g. react-s-alert's
 * <Alert /> elt, or react-request-hook's <RequestProvider />).
 * @param param0 
 */
export const AppContainer:FC = ({ children }) => {
  const footer = null;
  return (
    <div className='App'>
      <Alert />
      <div className='WrappedPage'>
        { children }
      </div>
      { footer }
    </div>
  )
}

export default AppContainer;