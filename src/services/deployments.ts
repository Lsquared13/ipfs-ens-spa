import { request } from 'react-request-hook';
import { DeploySeed, newDeployItem, DeployItem } from '../types';

const DEPLOYER_API_URL = 'https://ipfs-ens-deployer.eximchain-dev.com';

export function listDeployments():DeployItem[]{
  // TODO: Implement "listDeployments" query on server
  return [newDeployItem()]
}

export function getDeployment(name:string):DeployItem{
  // TODO: Implement a "getDeployment" function for getting
  // a single deployment.  If they end up including bigger
  // data, then this one will get the full output.
  return newDeployItem()
}

export function createDeployment(){
  // TODO: Implement "createDeployment" operation on server
}