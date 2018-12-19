import React, { Component } from 'react';
import GraphicHeader from '../../components/GraphicHeader';
import './style.css';
import Slider from "react-slick";
class Pricing extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {show: false};
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {

        var settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return <div className="pricing">
            <GraphicHeader
                title="Plans & Pricing"
                description="Flexible monthly plans to fit any workload"
                image={"url(" + require('../../assets/resources/pricing/pricing-background.png') + ")"}
            ></GraphicHeader>
            <div className="row grey">
                <div className="wishup-container">
                    <div className="plans-bar">
                        <div className="mobile-plans">
                            <div className="mobile-card">
                                <div className="plan-name">Econonmy Employee</div>
                                <div className="plan-details">
                                    <div className="plan-hours">
                                        10 hrs
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (10 hrs)
                                    </div>
                                </div>
                                <div className="plan-price">
                                    <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                    <span className="plan-amount">4,999</span> / month
                                </div>
                            </div>
                            <div className="mobile-card">
                                <div className="plan-name">Econonmy Employee</div>
                                <div className="plan-details">
                                    <div className="plan-hours">
                                        10 hrs
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (10 hrs)
                                    </div>
                                </div>
                                <div className="plan-price">
                                    <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                    <span className="plan-amount">4,999</span> / month
                                </div>
                            </div>
                            <div className={this.state.show? "hidden":"button-container"}>
                                <div className="button" onClick={()=>{this.setState({show: true})}
                                }>Show all plans</div>
                            </div>


                            <div className={this.state.show? "":"hidden"}>
                                <div className="mobile-card">
                                    <div className="plan-name">Econonmy Employee</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            10 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (10 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                        <span className="plan-amount">4,999</span> / month
                                    </div>
                                </div>
                                <div className="mobile-card">
                                    <div className="plan-name">Econonmy Employee</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            10 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (10 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                        <span className="plan-amount">4,999</span> / month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row slider">
                                <button className=" previous" onClick={this.previous}>
                                    <img src={require('../../assets/previous-icon.png')} height="45px"/>
                                </button>
                                <button className=" next" onClick={this.next}>
                                    <img src={require('../../assets/next-icon.png')} height="45px"/>
                                </button>
                            <Slider ref={c => (this.slider = c)} {...settings}>

                                <div className="col-md-3" key={1}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            One Week Trial
                                        </div>
                                        <div className="plan-description">
                                            A warm up plan to give you the feel of things and get you started!
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">4,999</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            10 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (10 hrs)
                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" key={2}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Mini Assistant
                                        </div>
                                        <div className="plan-description">
                                            A plan designed for smaller, recurring tasks
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">12,499</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            1.5 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 30 Hrs/month

                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" key={3}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Quarter Assistant
                                        </div>
                                        <div className="plan-description">
                                            A plan crafted  for busy entrepreneurs for  recurrent, small projects
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">15,999</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            2 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 45 Hrs/month

                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" key={4}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Economy Assistant
                                        </div>
                                        <div className="plan-description">
                                            A plan crafted  for start-ups for recurrent long-term tasks
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">20,999</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            3 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 60 Hrs/month

                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3" key={4}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Mini Assistant
                                        </div>
                                        <div className="plan-description">
                                            A plan customised for anyone looking for greater assistance!
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">29,499</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            2 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 80 Hrs/month

                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" key={5}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Full Employee
                                        </div>
                                        <div className="plan-description">
                                            A full-fledged plan meant for full-time assistance for mid-sized teams.
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">49,999</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            10 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 160 Hrs/month

                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" key={6}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Super Employee
                                        </div>
                                        <div className="plan-description">
                                            A plan crafted  for start-ups for recurrent long-term tasks
                                        </div>
                                        <div className="plan-price">
                                            <sup><img src={require('../../assets/rupee-indian.svg')} height="10px"/></sup>
                                            <span className="plan-amount">59,999</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            10 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 200 Hrs/month

                                        </div>
                                        <div className="plan-button">
                                            Sign Up
                                        </div>
                                    </div>
                                </div>
                            </Slider>
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
