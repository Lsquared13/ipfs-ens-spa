import React, { useEffect, FC, useState } from 'react';
import { connect } from 'react-redux';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, GitSelectors, GitActions } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import Select from '../sharedUI/SelectList';
import { Button } from '../sharedUI';

interface StateProps {
  repos: GitTypes.Repo[],
  reposLoading: boolean
}

interface DispatchProps {
  fetchRepos: () => void
  selectRepo: (owner: string, repo: string) => void
}

export interface RepoStageProps {

}

const RepoStage: FC<RepoStageProps & StateProps & DispatchProps> = (props) => {
  const { repos, fetchRepos, selectRepo, reposLoading } = props;

  useEffect(function fetchReposOnMount() {
    fetchRepos()
  }, []);

  const [selectedRepo, setSelectedRepo] = useState('');
  function proceed(){
    const [owner, name] = selectedRepo.split('/');
    selectRepo(owner, name);
  }

  if (reposLoading) return (
    <p>Loading repos, please wait...</p>
  )

  if (repos.length === 0) return (
    <p>No repos to display.</p>
  )

  // 1. If they haven't chosen a repo yet, present
  // the multiselect input
  const repoOptions = repos.map(repo => {
    const { full_name } = repo;
    return {
      label: `@${full_name}`,
      value: `${full_name}`
    }
  })

  return (
    <>
      <h2>Please select an app repostiory:</h2>
      <Select id='select-repo'
        onChange={({ value }) => {
          setSelectedRepo(value)
        }}
        value={selectedRepo}
        options={repoOptions} />
      <Button onClick={proceed} disabled={selectedRepo === ''}>Proceed</Button>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    repos: GitSelectors.getRepos(state),
    reposLoading: GitSelectors.isLoading(state).repos
  }
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => {
  return {
    fetchRepos: () => dispatch(GitActions.fetchRepos()),
    selectRepo: (owner:string, repo:string) => {
      console.log(`Owner: ${owner}, Repo: ${repo}`);
      dispatch(DeployActions.updateNewDeploy({ field: 'repo', value: repo }));
      dispatch(DeployActions.updateNewDeploy({ field: 'owner', value: owner }));
      dispatch(GitActions.fetchBranches(owner, repo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoStage);