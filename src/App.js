import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import Pricing from './containers/Pricing';
import WhatWeDo from './containers/WhatWeDo';
import WhyWishup from './containers/WhyWishup';
import LoginCard from './components/LoginCard';
import { Switch, Route } from 'react-router-dom'
class App extends Component {
    constructor(){
        super()
    }

    render() {

        return (
            <div>
                <div>
                    <HeaderBar></HeaderBar>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/login' component={LoginCard}/>
                        <Route exact path='/what-we-do' component={WhatWeDo}/>
                        <Route exact path='/why-wishup' component={WhyWishup}/>
                        <Route exact path='/pricing' component={Pricing}/>
                    </Switch>
                    {/*<HomePage/>*/}
                    {/*<Pricing></Pricing>*/}
                    {/*<WhatWeDo/>*/}

                    {/*<WhyWishup></WhyWishup>*/}
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default App;
