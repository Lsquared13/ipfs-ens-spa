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

  private buildHeaders(){
    const headers: Headers = {
      'Content-Type': 'application/json'
    }
    if (this.token) headers.Authorization = `${this.token}`;
    return headers;
  }

  async createDeployment(args:DeployArgs) {
    const res = await request(CreateDeployment.Path(args.ensName), {
      method: CreateDeployment.HTTP,
      headers: this.buildHeaders(),
      json: args
    })
    if (!isSuccessResponse(res)) throw new Error('deployStart response did not fit successResponse.');
    return res.data as MessageResult;
  }

  async login(code: string):Promise<GitTypes.Auth> {
    const args:Login.Args = { code };
    const res = await request(Login.Path, {
      method: Login.HTTP,
      headers: this.buildHeaders(),
      json: args
    });
    if (!isSuccessResponse(res)) throw new Error(`tokenFetch response did not fit successResponse.`)
    return res.data as GitTypes.Auth;
  }

  async listDeployments(): Promise<DeployItem[]> {
    const res:DeployItem[] = await request(ListDeployments.Path, {
      method: ListDeployments.HTTP,
      headers: this.buildHeaders(),
      json: true
    })
    if (!isSuccessResponse(res)) throw new Error(`deploysList response did not fit successResponse.`);
    return res.data as DeployItem[]
  }

  async getDeployment(name: string): Promise<DeployItem> {
    // TODO: Implement a "getDeployment" function for getting
    // a single deployment.  If they end up including bigger
    // data, then this one will get the full output.
    const res = await request(ReadDeployment.Path(name), {
      method: ReadDeployment.HTTP,
      headers: this.buildHeaders(),
      json: true
    })
    if (!isSuccessResponse(res)) throw new Error(`deployGet response did not fit successResponse.`);
    return res.data as DeployItem;
  }
}

export default Deployer;