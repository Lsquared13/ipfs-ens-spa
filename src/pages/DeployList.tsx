import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { DeployItem } from '@eximchain/ipfs-ens-types/spec/deployment';
import { Box, Button } from '../components/sharedUI';
import DeploymentTable from '../components/DeploymentTable';
import { AppState, DeployActions, DeploySelectors } from '../state';
import { AsyncDispatch } from '../state/sharedTypes';

export interface DeployListPageProps extends RouteComponentProps {

}

interface StateProps {
  deploys: { [key:string] : DeployItem }
  loading: boolean
  error: any
}

interface DispatchProps {
  loadDeploys: () => void
}

const DeployListPage: FC<DeployListPageProps & StateProps & DispatchProps> = (props) => {
  const { deploys, loadDeploys, error, loading, navigate } = props;

  useEffect(function loadDeploysOnMount() {
    loadDeploys();
  }, []);

  function goToNew() { navigate && navigate('/new') }

  let content;

  content = (
    <DeploymentTable deployments={Object.values(deploys)} />
  )

  if (loading) content = (
    <p>Loading your deployments...</p>
  )

  if (error) content = (
    <>
      <p>Error fetching your deployments:</p>
      <pre>{ JSON.stringify(error, null, 2)}</pre>
    </>
  )

  return (
    <>
      <h1>Deployments</h1>
      { content }
      <Button onClick={goToNew}>New Deployment</Button>
    </>
  )
}

const mapStateToProps = (state:AppState) => {
  return {
    deploys: DeploySelectors.getDeploys(state),
    error: DeploySelectors.getErr(state),
    loading: DeploySelectors.isLoading.deploys(state)
  }
}

const mapDispatchToProps = (dispatch:AsyncDispatch) => {
  return {
    loadDeploys: () => dispatch(DeployActions.fetchDeploys())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeployListPage);