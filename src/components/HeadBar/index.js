import React, { Component } from 'react';
import '../../styles/index.css';
import './header.css';
import LoginCard from '../../components/LoginCard';

class HeadBar extends Component {
    constructor(){
        super();
        this.state = {popup: ''}
    }

    isLoggedIn(){
        let token = localStorage.getItem("token");
        if(token){
            return true;
        }
        return false;
    }

  render(){
    //<Link to='/'>Home</Link>
    return (
        <div>
      {this.state.popup==="login"?<LoginCard type="login"></LoginCard>:''}
      {this.state.popup==="initial"?<LoginCard type="initial"></LoginCard>:''}
      <div className={this.isLoggedIn()?'black-header':''}>
        <div className="row">
          <div className="container-fluid">
              <nav className="navbar navbar-default">
                  <div className="wishup-container">

                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="/">
                              <div className="header-logo">
                                  <img src={require('../../assets/wishup_logo.png')} height="23px"/>
                              </div>

                          </a>
                      </div>

                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          {this.isLoggedIn()?             <ul className="nav navbar-nav navbar-right">

                              <li><a onClick={()=>{ localStorage.removeItem("token")}} href="/logout" className="cta">Logout</a></li>
                              </ul> :
                              <ul className="nav navbar-nav navbar-right">
                                  <li><a href="/why-wishup/">Why Wishup</a></li>
                                  <li><a href="/what-we-do/">What we do</a></li>
                                  <li><a href="/virtual-assistant-pricing/">Pricing</a></li>
                                  <li><a href="/virtual-assistant-faq/">FAQs</a></li>
                                  <li><a href="https://wishup.co/blog/">Blog</a></li>
                                  {/*<li><a onClick={()=>{this.setState({popup: 'login'})}}>Login</a></li>*/}
                                  <li><a onClick={()=>{this.setState({popup: 'initial'})}} className="cta">Get Started</a></li>
                              </ul> }

                      </div>

                  </div>

              </nav>
          </div>
        </div>
      </div>
        </div>
    );
  }
}

export default HeadBar;
