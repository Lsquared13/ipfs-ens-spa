import React from 'react';
import { AppContainer, AuthChecker } from './components/AppContainer';
import { DeployList, DeployDetail, NewDeploy, Login, PageNotFound } from './pages';
import { Router, Link } from "@reach/router"
import './App.css';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <AuthChecker path='/'>
          <DeployList default />
          <Login path='login' />
          <NewDeploy path='new' />
          <DeployDetail path='deploy/:deployName' />
        </AuthChecker>
      </Router>
    </AppContainer>
  )
}

export default App;
