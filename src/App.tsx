import React from 'react';
import { AppContainer, AuthChecker } from './components';
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
        <AuthChecker path='/'>
          <DeployListPage default />
          <LoginPage path='login' />
          <NewDeployPage path='new' />
          <DeployDetailPage path='deploy/:deployName' />
          <PageNotFound path='*' />
        </AuthChecker>
      </Router>
    </AppContainer>
  )
}

export default App;
