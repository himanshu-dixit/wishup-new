import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import './footer.css';


class Footer extends Component {
    toggle = () => {

    }
    render(){
        //<Link to='/'>Home</Link>
        return (
            <div>
                <div className="wishup-container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-logo">Wishup</div>
                            <div className="footer-description">Wishup is wishup</div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-sub-heading">Useful Links</div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="footer-link">About Us</div>
                                <div className="footer-link">About Us</div>
                                <div className="footer-link">About Us</div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">About Us</div>
                                <div className="footer-link">About Us</div>
                                <div className="footer-link">About Us</div>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-sub-heading">Subscribe</div>
                            <div className="footer-form">
                                <div className="row">
                                    <div className="col-md-10">
                                        {/*Input*/}
                                    </div>
                                    <div className="col-md-10">
                                        {/*Submit*/}
                                    </div>
                                </div>
                                <div className="footer-form-text">
                                    We'll send you updates regularly
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-footer-bar">
                        <div className="left-sub-footer">
                            <span className="sub-footer-text">Copyright @ 2019</span>
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
