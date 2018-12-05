import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';

class App extends Component {
    constructor(){
        super()
    }

    render() {

        return (
            <div>
                <HeaderBar></HeaderBar>
                <HomePage/>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
