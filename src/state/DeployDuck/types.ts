import { DeploySeed, DeployItem } from '../../types';

export interface DeployState {
  deploys : {
    [name:string] : DeployItem
  }
  deploysLoading: boolean
  newDeploy : DeploySeed
  error : null | any
}