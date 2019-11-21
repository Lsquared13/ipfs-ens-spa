import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, GitSelectors, GitActions } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import Select from '../sharedUI/SelectList';

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
          const [owner, name] = value.split('/');
          selectRepo(owner, name);
        }}
        options={repoOptions} />
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