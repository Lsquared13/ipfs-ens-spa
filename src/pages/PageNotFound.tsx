import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

export interface PageNotFoundProps extends RouteComponentProps {

}

export const PageNotFound: FC<PageNotFoundProps> = (props) => {
  // TODO: Add a "Login with GitHub" button, along with some
  // basic info about what the thing is
  return <></>
}

export default PageNotFound;