import React from 'react';
import { AppContainer } from './components';
import { LandingPage } from './pages';
import './App.css';

const App: React.FC = () => {
  return (
    <AppContainer>
      <LandingPage />
    </AppContainer>
  )
}

export default App;
