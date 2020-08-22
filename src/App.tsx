import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME } from './routes';
import Home from './pages/Home';
import './App.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
