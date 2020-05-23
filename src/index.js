import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './pages/Product';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFount';
import SignUp from './pages/SignUp';
import Users from './pages/Users';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/product" component={Product} />
      <Route path="/signup" component={SignUp} />
      <Route path="/users" component={Users} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
