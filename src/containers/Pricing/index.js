import React, { Component } from 'react';
import GraphicHeader from '../../components/GraphicHeader';
import './style.css';

class Pricing extends Component {
    render() {
        return <div>
            <GraphicHeader
                title="Plans & Pricing"
                description="Flexible monthly plans to fit any workload"
                image={"url(" + require('../../assets/resources/pricing/pricing-background.png') + ")"}
            ></GraphicHeader>
            <div className="row grey">
                <div className="wishup-container">
                    <div className="plans-bar">
                        <div className="row ">
                            <div className="col-md-3">
                                <div className="plan-card">
                                    <div className="plan-type">
                                        Economy Employee
                                    </div>
                                    <div className="plan-description">
                                        Small task work to keep on top of a few things.
                                    </div>
                                    <div className="plan-price">
                                        21000 / month
                                    </div>
                                    <div className="plan-hours">
                                        3 hrs/day
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (60 hours per months)
                                    </div>
                                    <div className="plan-button">
                                        Sign Up
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="plan-card">
                                    <div className="plan-type">
                                        Economy Employee
                                    </div>
                                    <div className="plan-description">
                                        Small task work to keep on top of a few things.
                                    </div>
                                    <div className="plan-price">
                                        21000 / month
                                    </div>
                                    <div className="plan-hours">
                                        3 hrs/day
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (60 hours per months)
                                    </div>
                                    <div className="plan-button">
                                        Sign Up
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="plan-card">
                                    <div className="plan-type">
                                        Economy Employee
                                    </div>
                                    <div className="plan-description">
                                        Small task work to keep on top of a few things.
                                    </div>
                                    <div className="plan-price">
                                        21000 / month
                                    </div>
                                    <div className="plan-hours">
                                        3 hrs/day
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (60 hours per months)
                                    </div>
                                    <div className="plan-button">
                                        Sign Up
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="plan-card">
                                    <div className="plan-type">
                                        Economy Employee
                                    </div>
                                    <div className="plan-description">
                                        Small task work to keep on top of a few things.
                                    </div>
                                    <div className="plan-price">
                                        21000 / month
                                    </div>
                                    <div className="plan-hours">
                                        3 hrs/day
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (60 hours per months)
                                    </div>
                                    <div className="plan-button">
                                        Sign Up
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="help-info">
                            Need multiple employees? Contact us at <a href="mailto:sales@wishup.com"> sales@wishup.co</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="pricing-section">
                <div className="wishup-container">
                    <h3>All Plans included</h3>
                    <div className="red-strip"></div>
                    <div className="row">
                        <div className="col-md-3">
                            <img src={require('../../assets/resources/pricing/tick.png')} height="55px"/>
                            <div className="plan-feature">
                                Well-trained and 5+ years experienced
                                professionals
                            </div>
                        </div>

                        <div className="col-md-3">
                            <img src={require('../../assets/resources/pricing/9-5.png')} height="55px"/>
                            <div className="plan-feature">
                                Account Manager to troubleshoot problems with VE
                            </div>
                        </div>

                        <div className="col-md-3">
                            <img src={require('../../assets/resources/pricing/chat.png')} height="55px"/>
                            <div className="plan-feature">
                                Direct communication via Phone, Email and Direct Messages.
                            </div>
                        </div>

                        <div className="col-md-3">
                            <img src={require('../../assets/resources/pricing/account-manager.png')} height="55px"/>
                            <div className="plan-feature">
                                Available from Mon-Fri between 9AM to 7PM IST
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Pricing;
