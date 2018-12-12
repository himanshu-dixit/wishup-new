import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import Pricing from './containers/Pricing';
import WhatWeDo from './containers/WhatWeDo';
class App extends Component {
    constructor(){
        super()
    }

    render() {

        return (
            <div>
                <HeaderBar></HeaderBar>
                {/*<HomePage/>*/}
                {/*<Pricing></Pricing>*/}
                <WhatWeDo/>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
