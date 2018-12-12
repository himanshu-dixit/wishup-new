import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Button from '../Button';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import CustomInput from '../CustomInput';
import { css } from 'aphrodite';
import data from "../../data/FAQ";
import {loop} from 'react-icons-kit/ionicons/loop';
import Icon from "react-icons-kit";
import './style.css';

class LoginCard extends Component {

    render(){
        //<Link to='/'>Home</Link>
        return (
            <div className="login-container">
            <div className="container">
                <div className="uContainer">
                    <div className="mainContainer">
                        <div className="content">
                            <div className="navContainer">
                                <div>
                                    <h2 className="heading">
                                        Need help?
                                    </h2>
                                    <hr/>
                                    <a>Support</a><br></br>
                                    <a>Forgot Password</a>

                                </div>
                            </div>
                            <div className="inputContainer">
                                <form>
                                    <h2 className="heading">
                                        Get Started
                                    </h2>
                                    <hr/>
                                    <CustomInput label="Your Full Name" type="text" id="name"/>
                                    <CustomInput label="Email Address" type="email" id="email"/>
                                    <CustomInput label="Phone" type="phone" id="phone"/>
                                    <div className="buttonsContainer">
                                        <div className="button-cta">Become VA</div>
                                        <div className="button-cta">Hire VA</div>

                                    </div>
                                </form>
                                {/*<form>*/}
                                    {/*<h2 className="heading">*/}
                                        {/*Types of services you want*/}
                                    {/*</h2>*/}
                                    {/*<hr/>*/}
                                    {/*<div className="tags">*/}
                                        {/*<div className="tag">Social Netowkrr</div>*/}
                                        {/*<div className="tag">Task Managgement</div>*/}
                                        {/*<div className="tag">Other </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="buttonsContainer">*/}
                                        {/*<div className="button-cta">Next</div>*/}

                                    {/*</div>*/}
                                {/*</form>*/}
                                {/*<form>*/}
                                    {/*<h2 className="heading">*/}
                                        {/*Last Step*/}
                                    {/*</h2>*/}
                                    {/*<hr/>*/}
                                    {/*<CustomInput label="Enter the password" type="password" id="password"/>*/}

                                    {/*<hr/>*/}
                                    {/*<div className="buttonsContainer">*/}

                                            {/*<a href="#" className="social-button" id="google-connect"> <span>Signup with Google</span></a>*/}
                                            {/*<a href="#" className="social-button" id="linkedin-connect"> <span>Signup with LinkedIn</span></a>*/}


                                    {/*</div>*/}
                                    {/*<div className="buttonsContainer">*/}
                                        {/*<div className="button-cta">Next</div>*/}

                                    {/*</div>*/}
                                {/*</form>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default LoginCard;
