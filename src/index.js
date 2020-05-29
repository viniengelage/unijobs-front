import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './pages/Product';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/home-test" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/signup" component={SignUp} />
      <Route path="/users" component={Users} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);