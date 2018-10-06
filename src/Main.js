import { Switch, Route } from 'react-router-dom'
import Home from './containers/HomePage';
import FAQ from './containers/FAQ';
import Login from './containers/Login';

import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/faqs' component={FAQ}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
