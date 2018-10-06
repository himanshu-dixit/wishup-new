import React, { Component } from 'react';
import HeaderBar from './components/HeadBar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderBar />
                <NavBar/>
                <Main />
                <Footer/>
            </div>
        );
    }
}

export default App;
