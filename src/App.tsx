import React from 'react';
import { AppContainer, AuthGateway } from './components';
import { 
  DeployListPage, DeployDetailPage, NewDeployPage, LoginPage, 
  PageNotFound
} from './pages';
import { Router, Link } from "@reach/router"
import './App.css';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <AuthGateway path='/'>
          
          Below commented out pending a list handler
          
          <DeployListPage path='/' />
          <NewDeployPage path='new' />
          <DeployDetailPage path='/deploy/:deployName' />
          <PageNotFound default />
        </AuthGateway>
      </Router>
    </AppContainer>
  )
}

export default App;
