import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import JSONPretty from 'react-json-pretty';
import { AppState, DeploySelectors } from '../state';
import { DeployItem } from '@eximchain/ipfs-ens-types/spec/deployment';
import { Box, Button } from '../components/sharedUI';

export interface DeployDetailPageProps extends RouteComponentProps {
  deployName?: string
}

interface StateProps {
  deploy: DeployItem | null
}

const DeployDetailPage: FC<DeployDetailPageProps & StateProps> = (props) => {
  const { deployName, deploy, navigate } = props;

  if (!deployName) return <p>No deployName in URL query.</p>
  if (!deploy) return <p>No deploy found in state.</p>
  return (
    <Box>
      <h2>{deployName} Details</h2>
      <JSONPretty id='deploy-details' data={deploy} />
      <Button onClick={()=>{if (navigate) navigate('/')}}>Go Home</Button>
    </Box>
  )
}

const mapStateToProps = (state: AppState, ownProps: DeployDetailPageProps) => {
  const { deployName } = ownProps;
  return {
    deploy: deployName ? DeploySelectors.getDeploy(deployName)(state) : null
  }
}

export default connect(mapStateToProps)(DeployDetailPage);