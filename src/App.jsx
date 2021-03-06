import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, LOGIN, TECHLIST } from './routes';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import TechState from './context/technologies/techState';
import tokenAuth from './config/token';
import PrivateRoute from './components/PrivateRoute';
import LoginRoute from './components/LoginRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import TechList from './pages/TechList';
import './App.scss';

// Check if a token exist
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

const App = () => {
  return (
    <BrowserRouter>
      <TechState>
        <AlertState>
          <AuthState>
            <Switch>
              <Route exact path={HOME} component={Home} />
              <LoginRoute exact path={LOGIN} component={Login} />
              <PrivateRoute exact path={TECHLIST} component={TechList} />
            </Switch>
          </AuthState>
        </AlertState>
      </TechState>
    </BrowserRouter>
  );
}

export default App;
