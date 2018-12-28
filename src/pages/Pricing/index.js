import React, { Component } from 'react';
import GraphicHeader from '../../components/GraphicHeader';
import './style.css';
import Slider from "react-slick";
import getPricing from "../../services/location";
import MetaTags from "react-meta-tags";
class Pricing extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {show: false, price: getPricing(), country: window.country, slide_no: 4};
        this.setState({price: getPricing()});
    }
    changeState(no){
        this.setState({slide_no: this.state.slide_no+no});
    }
    next() {

        this.slider.slickNext();


    }
    previous() {

        this.slider.slickPrev();
    }

    selectPlan(plan){
        localStorage.setItem('plan',plan);
        window.location.replace("/");
    }

    render() {
        var that = this;
        var settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            initialSlide: 3,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            afterChange: (index)=>{
                this.setState({slide_no: index});
            }
        };
        return <div className="pricing">
            <MetaTags>
                <title>Affordable Virtual Assistants, Price For Virtual/ Remote Assistant Services </title>
                <meta name="description" content="Wishup.co offers Virtual Assistant services at affordable prices. Hire a virtual assistant in USA, UK, Canada, India or anywhere and let your VA take care of your priorities."/>
                <meta property="og:title" content="Affordable Virtual Assistants, Price For Virtual/ Remote Assistant Services "/>
                <meta property="og:description" content="Wishup.co offers Virtual Assistant services at affordable prices. Hire a virtual assistant in USA, UK, Canada, India or anywhere and let your VA take care of your priorities. "/>
                <link rel="canonical" href="/virtual-assistant-pricing" />
            </MetaTags>

            <GraphicHeader
                title="Plans & Pricing"
                description="Flexible monthly plans to fit any workload"
                image={"url(" + require('../../assets/resources/pricing/pricing-background.png') + ")"}
            ></GraphicHeader>
            <div className="row grey">
                <div className="wishup-container">
                    <div className="plans-bar" onClick={()=>{this.selectPlan("super")}}>
                        <div className="mobile-plans">
                            <div className="mobile-card">
                                <div className="plan-name">Super Employee</div>
                                <div className="plan-details">
                                    <div className="plan-hours">
                                        10 hrs
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (200 hrs)
                                    </div>
                                </div>
                                <div className="plan-price">
                                    <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                    <span className="plan-amount">{this.state.price.super}</span> / month
                                </div>
                            </div>
                            <div className="mobile-card" onClick={()=>{this.selectPlan("full")}}>
                                <div className="plan-name">Full Employee</div>
                                <div className="plan-details">
                                    <div className="plan-hours">
                                        10 hrs
                                    </div>
                                    <div className="plan-hoursinmonth">
                                        (160 hrs)
                                    </div>
                                </div>
                                <div className="plan-price">
                                    <sup><img src={this.state.price.sign} height="10px"/></sup>
                                    <span className="plan-amount">{this.state.price.full}</span> / month
                                </div>
                            </div>
                            <div className={this.state.show? "hidden":"button-container"}>
                                <div className="button" onClick={()=>{this.setState({show: true})}
                                }>Show all plans</div>
                            </div>


                            <div className={this.state.show? "":"hidden"}>
                                <div className="mobile-card" onClick={()=>{this.selectPlan("hald")}}>
                                    <div className="plan-name">Half Assistant</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            4 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (80 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                        <span className="plan-amount">{this.state.price.half}</span> / month
                                    </div>
                                </div>
                                <div className="mobile-card">
                                    <div className="plan-name" onClick={()=>{this.selectPlan("economy")}}>Econonmy Employee</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            3 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (60 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                        <span className="plan-amount">{this.state.price.economy}</span> / month
                                    </div>
                                </div>
                                <div className="mobile-card" onClick={()=>{this.selectPlan("quarter")}}>
                                    <div className="plan-name">Quarter Assistant</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            2 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (45 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                        <span className="plan-amount">{this.state.price.quarter}</span> / month
                                    </div>
                                </div>
                                <div className="mobile-card" onClick={()=>{this.selectPlan("mini")}}>
                                    <div className="plan-name">Mini Assistant</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            1.5 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (30 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                        <span className="plan-amount">{this.state.price.mini}</span> / month
                                    </div>
                                </div>
                                <div className="mobile-card" onClick={()=>{this.selectPlan("trial")}}>
                                    <div className="plan-name">Trial</div>
                                    <div className="plan-details">
                                        <div className="plan-hours">
                                            10 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (10 hrs)
                                        </div>
                                    </div>
                                    <div className="plan-price">
                                        <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                        <span className="plan-amount">{this.state.price.trial}</span> / month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row slider">
                                {this.state.slide_no>=1 ? <button className=" previous" onClick={this.previous}>
                                        <img src={require('../../assets/previous-icon.png')} height="45px" />
                                    </button> : ''}
                                {this.state.slide_no>=3 ? '' :
                                <button className=" next" onClick={this.next} >
                                    <img src={require('../../assets/next-icon.png')} height="45px" />
                                </button>}
                            <Slider ref={c => (this.slider = c)} {...settings}>

                                <div className="col-md-3" key={1}>
                                    <div className="plan-card" >
                                        <div className="plan-type">
                                            One Week Trial
                                        </div>
                                        <div className="plan-description">
                                            A warm up plan to give you the feel of things and get you started!
                                        </div>
                                        <div className="plan-price">
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.trial}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            10 hrs
                                        </div>
                                        <div className="plan-hoursinmonth">
                                            (10 hrs)
                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("trial")}}>
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
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.mini}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            1.5 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 30 Hrs/month

                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("mini")}}>
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
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.quarter}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            2 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 45 Hrs/month

                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("quarter")}}>
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
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.economy}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            3 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 60 Hrs/month

                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("economy")}}>
                                            Sign Up
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3" key={4}>
                                    <div className="plan-card">
                                        <div className="plan-type">
                                            Half Assistant
                                        </div>
                                        <div className="plan-description">
                                            A plan customised for anyone looking for greater assistance!
                                        </div>
                                        <div className="plan-price">
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.half}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            4 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 80 Hrs/month

                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("half")}}>
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
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.full}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            10 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 160 Hrs/month

                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("full")}}>
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
                                            <sup>{this.state.price.image?<img src={this.state.price.sign} height="10px"/>:this.state.price.sign}</sup>
                                            <span className="plan-amount">{this.state.price.super}</span> / month
                                        </div>
                                        <div className="plan-hours">
                                            10 hrs/ Day
                                        </div>
                                        <div className="plan-hoursinmonth">

                                            Up to 200 Hrs/month

                                        </div>
                                        <div className="plan-button" onClick={()=>{this.selectPlan("super")}}>
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
            <div className="pricing-bar">
                <div className="wishup-container">
                    <div className="heading">
                        Tailor-made plans to suit every workload.
                    </div>
                    <div className="description">
                        Starting at <sup>{this.state.price.image?<img src={this.state.price.whitesign} height="10px"/>:this.state.price.sign}</sup>{this.state.price.mini}/month
                    </div>
                    <div className="cta">
                        <div className="button">Get Started</div>
                        <a href="/virtual-assistant-pricing/">
                            <div className="button">Plan and Pricing</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Pricing;
