import React, { useEffect, FC, useState} from 'react';
import { connect, useSelector } from 'react-redux';
import { GitTypes } from '@eximchain/ipfs-ens-types/spec/deployment';

import { DeployActions, GitSelectors, GitActions, DeploySelectors } from '../../state';
import { AppState } from '../../state/store';
import { AsyncDispatch } from '../../state/sharedTypes';

import { SelectList, Button } from '../sharedUI';

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
  const [selectedBranch, setSelectedBranch] = useState('');
  function proceed(){
    selectBranch(selectedBranch);
  }
  if (branchesLoading) return (
    <p>Loading branches, please wait...</p>
  )

  if (branches === undefined) return (
    <p>No branches to display.</p>
  )

  return (
    <>
      <p>Please select a branch from @{owner}/{repo}:</p>
      <SelectList id='select-branch'
        onChange={({ value }) => {
          setSelectedBranch(value);
        }}
        value={selectedBranch}
        options={branches.map(branch => ({
          label: `${branch.name} (${branch.commit.sha})`,
          value: branch.name
        }))} />
      <Button onClick={proceed} disabled={selectedBranch === ''}>Proceed</Button>
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