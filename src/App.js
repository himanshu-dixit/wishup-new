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
    constructor(props){
        super();
        this.state={popup: ""}
    }
    setPopupState(type){
        this.setState({popup: type});
    }
    render() {

        return (
            <div>
                {this.state.popup==="login"?<LoginCard type="login"></LoginCard>:''}
                {this.state.popup==="initial"?<LoginCard type="initial"></LoginCard>:''}
                <div>
                    <HeaderBar ></HeaderBar>
                    <Switch>
                        <Route exact path='/2' component={()=>{
                            return <HomePage set={this.setPopupState.bind(this)} type="new"></HomePage>;
                        }}/>
                        <Route exact path='/' component={()=>{
                            return <HomePage set={this.setPopupState.bind(this)}></HomePage>;
                        }}/>

                        <Route exact path='/logout' component={()=>{
                            return <HomePage></HomePage>;
                        }}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                        <Route exact path='/login' component={LoginCard}/>
                        <Route exact path='/what-we-do/:type' component={WhatWeDo}/>
                        <Route exact path='/what-we-do' component={WhatWeDo}/>
                        <Route exact path='/why-wishup' component={WhyWishup}/>
                        <Route exact path='/pricing' component={Pricing}/>
                        <Route exact path='/faq' component={FAQ}/>
                    </Switch>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default App;
