export * from './DeployDetail';
export * from './DeployList';
export * from './NewDeploy';
export * from './Login';
export * from './PageNotFound';

import Login from './Login';
import DeployDetail from './DeployDetail';
import DeployList from './DeployList';
import NewDeploy from './NewDeploy';
import PageNotFound from './PageNotFound'

export const LoginPage = Login;
export const DeployDetailPage = DeployDetail;
export const DeployListPage = DeployList;
export const NewDeployPage = NewDeploy;
export const NotFoundPage = PageNotFound;