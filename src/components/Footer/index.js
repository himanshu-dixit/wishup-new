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
                            <div className="footer-logo"> <img src='/static/assets/resources/logo.png' height="23px"/> wishup</div>
                            <div className="footer-description">Wishup helps by taking care of all the little tasks so you can chase the higher goals. Come give us your to-do lists and instead focus on things you care.</div>
                            <div className="footer-sub-heading">Subscribe</div><br></br>

                            <div className="footer-form-text">
                                We'll send you updates regularly
                            </div>
                            <div className="subscribe_bar">

                                <form
                                    action="https://wishup.us18.list-manage.com/subscribe/post?u=1b6f68fbae24ef77d377c480f&amp;id=1048219f9e"
                                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                    className="validate" target="_blank" noValidate>

                                    <input className="subscribe" type="email" name="EMAIL" className="required email email_input" placeholder="Enter your email"></input>
                                    <button className="subscribe_button" type="submit" value="Subscribe" name="subscribe"
                                             onClick={()=>{}}>subscribe</button>

                                </form>

                            </div>

                            <div className="footer-sub-heading">Join Us</div>

                            <div className="social-icons">
                                <a href="https://www.facebook.com/WishUpNow/" target="_blank">
                                <img src='/static/assets/facebook.png' height="23px"/>
                                </a>
                                <a href="https://twitter.com/wishupnow" target="_blank">
                                <img src='/static/assets/twitter.png' height="23px"/>
                                </a>
                                <a href="https://www.instagram.com/wishupnow/" target="_blank">
                                <img src='/static/assets/instagram.png' height="23px"/>
                                </a>
                            </div>

                        </div>
                        <div className="col-sm-3">
                            <div className="footer-sub-heading">Useful Links</div>
                            <div >
                                <div className="footer-link"><a href="/hire-research-assistant">Virtual Research Assistant</a></div>
                                <div className="footer-link"><a href="/hire-administritive-assistant"> Virtual Administrative Assistant</a></div>
                                <div className="footer-link"><a href="/hire-travel-assistant">Virtual Travel Assistant</a></div>
                                <div className="footer-link"><a href="/hire-socialmedia-assistant">Social Media Virtual Assistant</a></div>
                                <div className="footer-link"><a href="/hire-bookkeeping-assistant">Virtual Book-Keeping Assistant</a></div>
                                <div className="footer-link"><a href="/hire-email-assistant">Virtual Email Assistant</a></div>
                                <div className="footer-link"><a href="/hire-personal-assistant">Virtual Personal Assistant</a></div>
                                <div className="footer-link"><a href="/hire-hiring-assistant">Virtual Hiring Customer</a></div>
                                <div className="footer-link"><a href="/hire-ecommerce-assistant">Virtual Ecommerce Customer</a></div>

                            </div>
                        </div>

                        <div className="col-sm-5">
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">USA</div>
                                    <a href="/location/dallas-virtual-assistants">

                                    <div className="footer-link">Dallas</div>
                                    </a>
                                    <a href="/location/new-york-virtual-assistants">
                                        <div className="footer-link">New York</div>
                                    </a>
                                    <a href="/location/los-angeles-virtual-assistants">   <div className="footer-link"> Los Angeles</div></a>
                                    <a href="/location/chicago-virtual-assistants">   <div className="footer-link">Chicago</div></a>
                                    <a href="/location/houston-virtual-assistants">    <div className="footer-link">Houston</div></a>
                                    <a href="/location/san-francisco-virtual-assistants">       <div className="footer-link">San Francisco</div></a>
                                    <a href="/location/austin-virtual-assistants">           <div className="footer-link">Austin</div></a>

                                    <div className="footer-link country">Canada</div>
                                    <a href="/location/toronto-virtual-assistants"> <div className="footer-link">Toronto</div></a>
                                    <a href="/location/vancouver-virtual-assistants">    <div className="footer-link"> Vancouver</div></a>
                                    <a href="/location/seattle-virtual-assistants"> <div className="footer-link">Seattle</div></a>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">Europe</div>
                                    <a href="/location/uk-virtual-assistants">   <div className="footer-link">UK</div></a>
                                    <a href="/location/london-virtual-assistants">   <div className="footer-link">London</div></a>
                                    <a href="/location/tel-aviv-virtual-assistants">    <div className="footer-link">Tel Aviv</div></a>
                                    <a href="/location/berlin-virtual-assistants">        <div className="footer-link">Berlin</div></a>
                                    <a href="/location/paris-virtual-assistants"> <div className="footer-link">Paris</div></a>
                                    <a href="/location/dublin-virtual-assistants">            <div className="footer-link">Dublin</div></a>


                                </div>
                            </div>
                            <div className="col-xs-4">
                                <div >
                                    <div className="footer-link country">Asia</div>
                                    <a href="/location/dubai-virtual-assistants">   <div className="footer-link"> Dubai</div></a>
                                    <a href="/location/abu-dhabi-virtual-assistants">  <div className="footer-link">Abu Dhabi</div></a>
                                    <a href="/location/singapore-virtual-assistants">  <div className="footer-link">Singapore</div></a>
                                    <a href="/location/sydney-virtual-assistants">  <div className="footer-link">Sydney</div></a>
                                    <a href="/location/hong-kong-virtual-assistants"> <div className="footer-link">Hong Kong</div></a>
                                    <a href="/location/shanghai-virtual-assistants"> <div className="footer-link">Shangai</div></a>
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
