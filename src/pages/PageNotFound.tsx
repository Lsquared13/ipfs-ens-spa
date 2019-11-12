import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box } from '../components/sharedUI';

export interface PageNotFoundProps extends RouteComponentProps {

}

export const PageNotFound: FC<PageNotFoundProps> = (props) => {
  return (
    <Box alignContent='center'>
      <h1>Page Not Found</h1>
      <p>We couldn't find a page at that URL.  If you're looking for a deployment, check it wasn't deleted.</p>
    </Box>
  )
}

export default PageNotFound;