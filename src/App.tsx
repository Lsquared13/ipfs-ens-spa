import React from 'react';
import { AppContainer, AuthChecker } from './components';
import { 
  DeployListPage, DeployDetailPage, NewDeployPage, LoginPage, 
  PageNotFoundProps 
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
        </AuthChecker>
      </Router>
    </AppContainer>
  )
}

export default App;
