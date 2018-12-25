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
                <h2>What Can Wishup Help Me With?</h2>
                <div className="description">We can help with both your work and personal life tasks, letting you focus on what’s most important.</div>
                <div className="container wishup-box">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="what-we-do-card">
                                <div className="icon-box">
                                    <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                </div>
                                <div className="task-title">
                                Adminstritative and Executive Assistant
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="what-we-do-card">
                                <div className="icon-box">
                                    <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                </div>
                                <div className="task-title">
                                    Adminstritative and Executive Assistant
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="what-we-do-card">
                                <div className="icon-box">
                                    <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                </div>
                                <div className="task-title">
                                    Adminstritative and Executive Assistant
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="what-we-do-card">
                                <div className="icon-box">
                                    <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                </div>
                                <div className="task-title">
                                    Adminstritative and Executive Assistant
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-md-offset-6">
                            <div className="what-we-do-card">
                                <div className="icon-box">
                                    <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                </div>
                                <div className="task-title">
                                    Adminstritative and Executive Assistant
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className="wishup-container">
                        <h2>What Doesn't Wishup Do?</h2>
                        <div className="description">There are in fact a few things that we don't do... yet. But we're constantly looking for ways to grow our capabilities even more.</div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="icon-box">
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
                        </div>
                    </div>

                    <div className="wishup-container">
                        <h2>What Doesn't Wishup Do?</h2>
                        <div className="description">There are in fact a few things that we don't do... yet. But we're constantly looking for ways to grow our capabilities even more.</div>
                        <div className="row task-list-box">
                            <div>
                                <h4>Work Related Tasking</h4>
                            </div>

                            <div className="col-sm-6">
                                <div className="col-xs-4">
                                    <div >
                                        <div className="what-we-do-link what-we-do-heading">USA</div>
                                        <div className="what-we-do-link">Dallas</div>
                                        <div className="what-we-do-link">New York</div>
                                        <div className="what-we-do-link"> Los Angeles</div>
                                        <div className="what-we-do-link">Chicago</div>
                                        <div className="what-we-do-link">Houston</div>
                                        <div className="what-we-do-link">San Francisco</div>
                                        <div className="what-we-do-link">Austin</div>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div >
                                        <div className="what-we-do-link what-we-do-heading">Europe</div>
                                        <div className="what-we-do-link">UK</div>
                                        <div className="what-we-do-link">London</div>
                                        <div className="what-we-do-link">Tel Aviv</div>
                                        <div className="what-we-do-link">Berlin</div>
                                        <div className="what-we-do-link">Paris</div>
                                        <div className="what-we-do-link">Dublin</div>
                                    </div>
                                </div>
                                <div className="col-xs-4">
                                    <div >
                                        <div className="what-we-do-link what-we-do-heading">Europe</div>
                                        <div className="what-we-do-link">UK</div>
                                        <div className="what-we-do-link">London</div>
                                        <div className="what-we-do-link">Tel Aviv</div>
                                        <div className="what-we-do-link">Berlin</div>
                                        <div className="what-we-do-link">Paris</div>
                                        <div className="what-we-do-link">Dublin</div>
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
