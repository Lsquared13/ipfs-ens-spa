import { isSuccessResponse, MessageResult } from '@eximchain/api-types/spec/responses';
import { GitTypes, DeployItem, DeployArgs } from '@eximchain/ipfs-ens-types/spec/deployment';
import { Login } from '@eximchain/ipfs-ens-types/spec/methods/auth';
import { CreateDeployment, ListDeployments, ReadDeployment } from '@eximchain/ipfs-ens-types/spec/methods/private';
import request from 'request-promise-native';

interface Headers {
  'Content-Type': string
  Authorization?: string
}

export class Deployer {
  constructor(token: string | null) {
    this.token = token;
  }
  token: string|null

  private makeRequest(apiPath:string, method:string, args?:any) {
    const headers: Headers = {
      'Content-Type': 'application/json'
    }
    headers.Authorization = this.token || '';
    return request(
      `${process.env.REACT_APP_IPFS_ENS_API_URL}${apiPath}`, {
      method, headers,
      // If there are no args, settings JSON to true ensures
      // the body is parsed before returning to us.
      json: args || true
    })
  }

  async createDeployment(args:DeployArgs) {
    const res:CreateDeployment.Response = await this.makeRequest(
      CreateDeployment.Path(args.ensName),
      CreateDeployment.HTTP,
      args
    )
    if (!isSuccessResponse(res)) throw new Error('deployStart response did not fit successResponse.');
    console.log('Received following createDeployment response data: ',res.data);
    return res.data as MessageResult;
  }

  async login(code: string):Promise<GitTypes.Auth> {
    const args:Login.Args = { code };
    const res:Login.Response = await this.makeRequest(
      Login.Path, 
      Login.HTTP,
      args
    );
    if (!isSuccessResponse(res)) throw new Error(`tokenFetch response did not fit successResponse.`)
    console.log('Received following login response data: ',res.data);
    return res.data as GitTypes.Auth;
  }

  async listDeployments(): Promise<DeployItem[]> {
    const res:ListDeployments.Response = await this.makeRequest(
      ListDeployments.Path, 
      ListDeployments.HTTP
    )
    if (!isSuccessResponse(res)) throw new Error(`deploysList response did not fit successResponse.`);
    console.log('Received following deploysList response data: ',res.data);
    return res.data.items as DeployItem[]
  }

  async getDeployment(name: string): Promise<DeployItem> {
    // TODO: Implement a "getDeployment" function for getting
    // a single deployment.  If they end up including bigger
    // data, then this one will get the full output.
    const res:ReadDeployment.Response = await this.makeRequest(
      ReadDeployment.Path(name), 
      ReadDeployment.HTTP
    )
    if (!isSuccessResponse(res)) throw new Error(`deployGet response did not fit successResponse.`);
    console.log('Received following deployGet response data: ',res.data);
    return res.data.item as DeployItem;
  }
}

export default Deployer;