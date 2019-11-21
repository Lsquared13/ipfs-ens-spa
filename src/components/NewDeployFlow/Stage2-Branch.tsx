import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, GitSelectors, GitActions, DeploySelectors } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import Select from '../sharedUI/SelectList';

interface StateProps {
  branches: GitTypes.Branch[]
  branchesLoading: boolean
  repo: string
  owner: string
}

interface DispatchProps {
  fetchBranches: (owner:string, repo:string) => void
  selectBranch: (name:string) => void
}

export interface BranchStageProps {

}

const BranchStage: FC<BranchStageProps & StateProps & DispatchProps> = (props) => {
  const { branches, branchesLoading, repo, owner, fetchBranches, selectBranch } = props;

  // useEffect(function fetchBranchesOnMount() {
  //   fetchBranches(owner, repo);
  // }, []);

  if (branchesLoading) return (
    <p>Loading branches, please wait...</p>
  )

  if (branches === undefined) return (
    <p>No branches to display.</p>
  )

  return (
    <>
      <h2>Please select a branch from @{owner}/{repo}:</h2>
      <Select id='select-branch'
        onChange={({ value }) => {
          selectBranch(value);
        }}
        options={branches.map(branch => ({
          label: `${branch.name} (${branch.commit})`,
          value: branch.name
        }))} />
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  const { repo, owner } = DeploySelectors.getNewDeploy(state);
  return {
    branches: GitSelectors.getBranches(state)[`${owner}/${repo}`],
    branchesLoading: GitSelectors.isLoading(state).branches,
    repo, owner
  }
}

const mapDispatchToProps = (dispatch: AsyncDispatch) => {
  return {
    fetchBranches: (owner:string, repo:string) => dispatch(GitActions.fetchBranches(owner, repo)),
    selectBranch: (name:string) => {
      dispatch(DeployActions.updateNewDeploy({ field: 'branch', value: name }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BranchStage);