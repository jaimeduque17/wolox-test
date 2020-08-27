import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, LOGIN } from './routes';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <AlertState>
        <AuthState>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
        </Switch>
        </AuthState>
      </AlertState>
    </BrowserRouter>
  );
}

export default App;
