import { Switch, Route } from 'react-router-dom'
import Home from './containers/HomePage'
import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
