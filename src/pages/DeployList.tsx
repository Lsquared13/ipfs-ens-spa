import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import { DeployItem } from '@eximchain/ipfs-ens-types/spec/deployment';
import { Box, Button, DeploymentTable, ApiError } from '../components';
import { AppState, DeployActions, DeploySelectors, GitActions } from '../state';
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
  logout: () => void
}

const DeployListPage: FC<DeployListPageProps & StateProps & DispatchProps> = (props) => {
  const { deploys, loadDeploys, error, loading, navigate, logout } = props;

  useEffect(function loadDeploysOnMount() {
    loadDeploys();
  }, []);

  function goToNew() { navigate && navigate('/new') }

  function logOut() {

  }

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
      <ApiError {...{ error }} />
    </>
  )

  return (
    <>
      <h1>IPFS ENS Deployer</h1>
      <h2>All Deployments</h2>
      { content }
      <Button onClick={goToNew}>New Deployment</Button>
      <Button onClick={logout}>Log Out</Button>
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
    loadDeploys: () => dispatch(DeployActions.fetchDeploys()),
    logout: () => dispatch(GitActions.resetAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeployListPage);