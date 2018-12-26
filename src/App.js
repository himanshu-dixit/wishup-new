import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

// Import header and footer
import HeaderBar from './components/HeadBar';
import Footer from './components/Footer';

// Import pages.
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import WhatWeDo from './pages/WhatWeDo';
import Dashboard from './pages/Dashboard';
import WhyWishup from './pages/WhyWishup';
import LoginCard from './components/LoginCard';
import FAQ from './pages/FAQ';
import WhatWeDoList from './pages/WhatWeDoList';

class App extends Component {
    constructor(){
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
                        <Route exact path='/' component={()=>{
                            return <HomePage set={this.setPopupState.bind(this)} type="new"></HomePage>;
                        }}/>
                        <Route exact path='/2' component={()=>{
                            return <HomePage set={this.setPopupState.bind(this)}></HomePage>;
                        }}/>

                        <Route exact path='/logout' component={()=>{
                            return <HomePage></HomePage>;
                        }}/>
                        <Route exact path='/dashboard' component={Dashboard}/>
                        <Route exact path='/login' component={LoginCard}/>
                        <Route exact path='/what-we-do' component={WhatWeDoList}/>
                        <Route exact path='/what-we-do/:type' component={WhatWeDo}/>
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
