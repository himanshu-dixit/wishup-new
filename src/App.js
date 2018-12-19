import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';
import Pricing from './containers/Pricing';
import WhatWeDo from './containers/WhatWeDo';
import Dashboard from './containers/Dashboard';
import WhyWishup from './containers/WhyWishup';
import LoginCard from './components/LoginCard';
import FAQ from './containers/FAQ';
import { Switch, Route } from 'react-router-dom'
class App extends Component {

    render() {

        return (
            <div>
                <div>
                    <HeaderBar></HeaderBar>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/faq' component={FAQ}/>
                        <Route exact path='/logout' component={()=>{
                            return <HomePage></HomePage>;
                        }}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                        <Route exact path='/login' component={LoginCard}/>
                        <Route exact path='/what-we-do/:type' component={WhatWeDo}/>
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
