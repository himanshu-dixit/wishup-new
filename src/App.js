import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import Pricing from './containers/Pricing';
import WhatWeDo from './containers/WhatWeDo';
import WhyWishup from './containers/WhyWishup';
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
                {/*<WhatWeDo/>*/}
                <WhyWishup></WhyWishup>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
