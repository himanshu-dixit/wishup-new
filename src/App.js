import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import Pricing from './containers/Pricing';
import FAQ from './containers/FAQ';
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
                <FAQ/>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
