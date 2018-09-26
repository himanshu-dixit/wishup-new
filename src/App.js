import React, { Component } from 'react';
import HeaderBar from './components/HeadBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Main />
      </div>
    );
  }
}

export default App;
