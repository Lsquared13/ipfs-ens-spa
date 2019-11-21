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
          {/* 
          Below commented out pending a list handler
          
          <DeployListPage default />
          <NewDeployPage path='new' /> */}
          <NewDeployPage default />
          <DeployDetailPage path='deploy/:deployName' />
          <PageNotFound path='*' />
        </AuthGateway>
      </Router>
    </AppContainer>
  )
}

export default App;
