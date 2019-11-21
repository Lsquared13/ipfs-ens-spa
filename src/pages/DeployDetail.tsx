import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import JSONPretty from 'react-json-pretty';
import { AppState, DeploySelectors, DeployActions } from '../state';
import { DeployItem } from '@eximchain/ipfs-ens-types/spec/deployment';
import { Box, Button } from '../components/sharedUI';
import { AsyncDispatch } from '../state/sharedTypes';

export interface DeployDetailPageProps extends RouteComponentProps {
  deployName?: string
}

interface StateProps {
  deploy: DeployItem | null
  loading: boolean
  error: any
}

interface ActionProps {
  fetchDeploy: (name:string) => void
}

const DeployDetailPage: FC<DeployDetailPageProps & StateProps & ActionProps> = (props) => {
  const { deployName, deploy, navigate, error, loading, fetchDeploy } = props;

  useEffect(function loadDeployIfMissing(){
    if (!deployName) return;
    if (loading || error || deploy) return;
    console.log('Attempting to fetch deploy, state is following: ', {
      deployName, deploy, loading, error
    })
    fetchDeploy(deployName)
  }, [loading, error, deploy, deployName, fetchDeploy])

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
    deploy: deployName ? DeploySelectors.getDeploy(deployName)(state) : null,
    loading: DeploySelectors.isLoading.deploys(state),
    error: DeploySelectors.getErr(state)
  }
}

const mapDispatchToProps = (dispatch:AsyncDispatch) => {
  return {
    fetchDeploy: (name:string) => dispatch(DeployActions.fetchDeploy(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeployDetailPage);