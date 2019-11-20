import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box } from '../components/sharedUI';
import NewDeployFlow from '../components/NewDeployFlow';

export interface NewDeployPageProps extends RouteComponentProps {

}

export const NewDeployPage: FC<NewDeployPageProps> = (props) => {
  return (
    <Box>
      <h1>New Deployment</h1>
      <NewDeployFlow />
    </Box>
  )
}

export default NewDeployPage;