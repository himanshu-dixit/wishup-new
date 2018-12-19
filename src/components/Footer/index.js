import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import './index.css';


class Footer extends Component {
    toggle = () => {

    }
    render(){
        //<Link to='/'>Home</Link>
        return (
            <div className="footer">
                <div className="wishup-container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="footer-logo"> <img src={require('../../assets/resources/logo.png')} height="23px"/> Wishup</div>
                            <div className="footer-description">Wishup helps by taking care of all the little tasks so you can chase the higher goals. Come give us your to-do lists and instead focus on things you care.</div>
                            <div className="footer-sub-heading">Subscribe</div><br></br>

                            <div className="footer-form-text">
                                We'll send you updates regularly
                            </div><br></br>
                            <div className="social-icons">
                                <img src={require('../../assets/facebook.png')} height="23px"/>
                                <img src={require('../../assets/twitter.png')} height="23px"/>
                                <img src={require('../../assets/instagram.png')} height="23px"/>
                            </div>

                        </div>
                        <div className="col-sm-3">
                            <div className="footer-sub-heading">Useful Links</div>
                            <div >
                                <div className="footer-link">Virtual Research Assistant</div>
                                <div className="footer-link">Virtual Research Assistant</div>
                                <div className="footer-link">Virtual Research Assistant</div>
                                <div className="footer-link">Virtual Research Assistant</div>
                                <div className="footer-link">Virtual Research Assistant</div>
                                <div className="footer-link">Virtual Research Assistant</div>
                            </div>
                        </div>

                        <div className="col-sm-5">
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">San francisco</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">San francisco</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">New york</div>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">San francisco</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">San francisco</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">New york</div>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">San francisco</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">San francisco</div>
                                    <div className="footer-link">New york</div>
                                    <div className="footer-link">New york</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-footer-bar">
                        <div className="left-sub-footer">
                            <span >Copyright @ 2019</span>
                            <span className="sub-footer-text">All Right Reserved</span>
                        </div>
                        <div className="right-sub-footer">
                            <a className="footer-sub-link">Home</a>
                            <a className="footer-sub-link">Home</a>
                            <a className="footer-sub-link">Home</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
