import React, { Component } from 'react';
import '../../styles/index.css';
import './header.css';


class HeadBar extends Component {
  toggle = () => {

  }
  render(){
    //<Link to='/'>Home</Link>
    return (
      <div>
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
                              <img src={require('../../assets/resources/logo.png')} height="23px"/>
                          </a>
                      </div>

                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                              <li><a href="/why-wishup">Why US</a></li>
                              <li><a href="/what-we-do">What we do</a></li>
                              <li><a href="/pricing">Pricing</a></li>
                              <li><a href="">FAQs</a></li>
                              <li><a href="/login" className="cta">Get Started</a></li>
                          </ul>
                      </div>

                  </div>

              </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadBar;
