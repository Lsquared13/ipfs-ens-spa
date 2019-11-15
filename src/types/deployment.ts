import { keysAreStrings } from './index';

export interface DeployName {
  EnsDomain: string
}
export interface DeploySeed extends DeployName {
  OwnerEmail: string
  RepoName: string
  BranchName: string
  BuildDir: string
}

export function isDeploySeed(val:any): val is DeploySeed {
  return keysAreStrings(val, ['EnsDomain', 'OwnerEmail', 'RepoName', 'BranchName', 'BuildDir'])
}

export function newDeploySeed():DeploySeed {
  return {
    EnsDomain: '',
    OwnerEmail: '',
    RepoName: '',
    BranchName: '',
    BuildDir: ''
  }
}

export interface DeployItem extends DeploySeed {
  CreatedAt: string
  UpdatedAt: string
}

export function isDeployItem(val:any): val is DeployItem {
  return isDeploySeed(val) && keysAreStrings(val, ['CreatedAt', 'UpdatedAt'])
}

export function newDeployItem():DeployItem {
  return {
    ...newDeploySeed(),
    CreatedAt: Date.now().toString(),
    UpdatedAt: Date.now().toString()
  }
}