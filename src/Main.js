import { Switch, Route } from 'react-router-dom'
import Home from './pages/index';
import FAQ from './pages/WhatWeDo';
import Login from './pages/Login';
import Pricing from './pages/pricing';

import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/faqs' component={FAQ}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/plans-pricing' component={Pricing}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
