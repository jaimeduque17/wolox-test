import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, LOGIN } from './routes';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={LOGIN} component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
