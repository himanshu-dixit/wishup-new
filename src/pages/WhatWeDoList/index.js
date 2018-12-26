import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';

class WhatWeDo extends Component {
    render() {

        return (
            <div className="what-we-do-main">
                <GraphicHeader
                    title="What we do"
                    description=""
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[1].png') + ")"}
                />
                <div className="wishup-container">
                    <h2 className="first-heading">What Can Wishup Help Me With?</h2>
                    <div className="description first-description">We can help with both your work and personal life tasks, letting you focus on what’s most important.</div>
                    <div className="container wishup-box">
                        <div className="row">

                            <div className="col-md-3">
                                <a href="/what-we-do/what-we-do-administritive">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Administrative and Executive Assistant
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/what-we-do/what-we-do-socialmedia">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/socialmedia.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Social Media Assistant
                                    </div>
                                </div>
                                </a>
                            </div>


                            <div className="col-md-3">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/lead.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Lead generation Assistant
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <a href="/what-we-do/what-we-do-research">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/research.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Research Assistant
                                    </div>
                                </div>
                                </a>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <a href="/what-we-do/what-we-do-bookkeeping">
                                    <div className="what-we-do-card">
                                        <div className="icon-box">
                                            <img src={require('../../assets/resources/icons/bookkeeping.svg') } height="50px"/>
                                        </div>
                                        <div className="task-title">
                                            Bookkeeping Assistant
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="/what-we-do/what-we-do-email">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/mail.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Email Assistant
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="/what-we-do/what-we-do-hiring">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/hiring.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Hiring Assistant
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/realestate.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Real Estate Assistant
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-3 col-sm-offset-5">
                                <a href="/what-we-do/what-we-do-travel">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src={require('../../assets/resources/icons/travel.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Travel Assistant
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wishup-container">
                        <h2 className="second-heading">What Doesn't Wishup Do?</h2>
                        <div className="description secondary-description">There are in fact a few things that we don't do... yet. But we're constantly looking for ways to grow our capabilities even more.</div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        In-person tasks.
                                    </div>
                                    <div className="task-description">
                                        We work virtually, but can schedule in-person services.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src={require('../../assets/resources/icons/sales.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Sales
                                    </div>
                                    <div className="task-description">
                                        We work virtually, but can schedule in-person services.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src={require('../../assets/resources/icons/bookkeeping.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Legal, Accounting and HR
                                    </div>
                                    <div className="task-description">
                                        We work virtually, but can schedule in-person services.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src={require('../../assets/resources/icons/customersupport.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Full time customer support
                                    </div>
                                    <div className="task-description">
                                        We work virtually, but can schedule in-person services.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-sm-offset-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src={require('../../assets/resources/icons/money.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Payment on Behalf of the clients
                                    </div>
                                    <div className="task-description">
                                        We work virtually, but can schedule in-person services.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src={require('../../assets/resources/icons/user.svg') } height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Receptionist service
                                    </div>
                                    <div className="task-description">
                                        We work virtually, but can schedule in-person services.
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        );
    }
}

export default WhatWeDo;
