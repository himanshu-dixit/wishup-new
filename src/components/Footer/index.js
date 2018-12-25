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
                            </div>
                            <div className="subscribe_bar">
                                <input className="subscribe" placeholder="super-email@gmail.com"></input>
                                <span className="subscribe_button" onClick="subscribeOnClick()">subscribe</span>
                            </div>

                            <div className="footer-sub-heading">Join Us</div>

                            <div className="social-icons">
                                <a href="https://www.facebook.com/WishUpNow/" target="_blank">
                                <img src={require('../../assets/facebook.png')} height="23px"/>
                                </a>
                                <a href="https://twitter.com/wishupnow" target="_blank">
                                <img src={require('../../assets/twitter.png')} height="23px"/>
                                </a>
                                <a href="https://www.instagram.com/wishupnow/" target="_blank">
                                <img src={require('../../assets/instagram.png')} height="23px"/>
                                </a>
                            </div>

                        </div>
                        <div className="col-sm-3">
                            <div className="footer-sub-heading">Useful Links</div>
                            <div >
                                <div className="footer-link"><a href="/what-we-do/what-we-do-research">Virtual Research Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-administritive"> Virtual Administrative Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-travel">Virtual Travel Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-socialmedia">Social Media Virtual Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-bookkeeping">Virtual Book-Keeping Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-email">Virtual Email Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-personal">Virtual Personal Assistant</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-hiring">Virtual Hiring Customer</a></div>
                                <div className="footer-link"><a href="/what-we-do/what-we-do-ecommerce">Virtual Ecommerce Customer</a></div>

                            </div>
                        </div>

                        <div className="col-sm-5">
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">USA</div>
                                    <div className="footer-link">Dallas</div>
                                        <div className="footer-link">New York</div>
                                            <div className="footer-link"> Los Angeles</div>
                                                <div className="footer-link">Chicago</div>
                                                    <div className="footer-link">Houston</div>
                                                        <div className="footer-link">San Francisco</div>
                                                            <div className="footer-link">Austin</div>

                                    <div className="footer-link country">Canada</div>
                                    <div className="footer-link">Toronto</div>
                                    <div className="footer-link"> Vancouver</div>
                                    <div className="footer-link">Seattle</div>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">Europe</div>
                                        <div className="footer-link">UK</div>
                                            <div className="footer-link">London</div>
                                                <div className="footer-link">Tel Aviv</div>
                                                    <div className="footer-link">Berlin</div>
                                                        <div className="footer-link">Paris</div>
                                                            <div className="footer-link">Dublin</div>


                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">Asia</div>
                                    <div className="footer-link"> Dubai</div>
                                    <div className="footer-link">Abu Dhabi</div>
                                    <div className="footer-link">Singapore</div>
                                    <div className="footer-link">Sydney</div>
                                    <div className="footer-link">Hong Kong</div>
                                    <div className="footer-link">Shangai</div>
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
                            <a className="footer-sub-link" href="https://www.wishup.co/privacy-policy/">Privacy Policy</a>
                            <a className="footer-sub-link" href="https://www.wishup.co/terms-and-conditions/">Terms and conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
