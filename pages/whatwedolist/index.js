import React, { Component } from 'react';
import './style.css';
import '../index/style.css';
import GraphicHeader from '../../src/components/GraphicHeader';
import MetaTags from "react-meta-tags";
import getPricing from "../../src/services/location";
import HeadBar from "../../src/components/HeadBar";
import Pricing from "../../src/components/MainComponents/Pricing";
import Footer from "../../src/components/Footer";
import Head from "next/head";


class WhatWeDo extends Component {
    constructor(){
        super();
        this.state = { width: 0, height: 0, price: getPricing()};
    }
    render() {

        return (
            <div>
                <Head>
                    <title>Wishup</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                          crossOrigin="anonymous"></link>
                    <link rel="stylesheet" type="text/css" charset="UTF-8"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"></link>
                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                            crossOrigin="anonymous"></script>
                </Head>
                <HeadBar/>
            <div className="what-we-do-main">
                <MetaTags>
                    <title>What Does A Virtual Assistant Do? | Wishup</title>
                    <link rel="canonical" href="/what-we-do"/>
                    <meta name="twitter:title" content="Why Hire A Virtual Assistant?"/>
                    <meta property="og:title" content="Why Hire A Virtual Assistant?"/>
                    <meta name="description" content="Why should you hire a Zirtual Virtual Assistant? Easy. Because we only hire the best VA’s – and they will move mountains to help you balance work and life."/>
                    <meta property="og:description" content="Why should you hire a Zirtual Virtual Assistant? Easy. Because we only hire the best VA’s – and they will move mountains to help you balance work and life."/>
                    <meta name="twitter:description" content="Why should you hire a Zirtual Virtual Assistant? Easy. Because we only hire the best VA’s – and they will move mountains to help you balance work and life."/>
                    <meta property="og:image" content="https://d37szscqjmjaac.cloudfront.net/production/20181203-032325/images/why-z_c0bd7e43.jpg"/>
                    <meta name="twitter:image" content="https://d37szscqjmjaac.cloudfront.net/production/20181203-032325/images/why-z_c0bd7e43.jpg"/>
                    <meta name="twitter:image:alt" content="Why Hire A Virtual Assistant?"  />
                </MetaTags>

                <GraphicHeader
                    title="What we do"
                    description=""
                    image='url("/static/assets/resources/what-we-do/what-we-do-background[1].png")'
                />

                <div className="wishup-container">
                    <h2 className="first-heading">What Can Wishup Help Me With?</h2>
                    <div className="mobile-bar"></div>
                    <div className="description first-description">We can help with both your work and personal life tasks, letting you focus on what’s most important.</div>
                    <div className="container wishup-box">
                        <div className="row">

                            <div className="col-md-3">
                                <a href="/hire-administritive-assistant">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src='/static/assets/resources/icons/Add document.png' height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Administrative and Executive Assistant
                                    </div>
                                </div>
                                </a>
                            </div>

                            <div className="col-md-3">
                                <a href="/hire-socialmedia-assistant">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src='/static/assets/resources/icons/socialmedia.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/lead.png' height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Lead generation Assistant
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <a href="/hire-research-assistant">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src='/static/assets/resources/icons/research.png' height="50px"/>
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
                                <a href="/hire-bookkeeping-assistant">
                                    <div className="what-we-do-card">
                                        <div className="icon-box">
                                            <img src='/static/assets/resources/icons/bookkeeping.png' height="50px"/>
                                        </div>
                                        <div className="task-title">
                                            Bookkeeping Assistant
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="/hire-email-assistant">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src='/static/assets/resources/icons/mail.png' height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Email Assistant
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="/hire-hiring-assistant">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src='/static/assets/resources/icons/hiring.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/realestate.png' height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Real Estate Assistant
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-3 col-sm-offset-5">
                                <a href="/hire-travel-assistant">
                                <div className="what-we-do-card">
                                    <div className="icon-box">
                                        <img src='/static/assets/resources/icons/travel.png' height="50px"/>
                                    </div>
                                    <div className="task-title">
                                        Travel Assistant
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="second-heading">What Doesn't Wishup Do?</h2>
                        <div className="mobile-bar"></div>
                        <div className="description secondary-description">There are in fact a few things that we don't do... yet. But we're constantly looking for ways to grow our capabilities even more.</div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="wishup-dont-tasks">
                                    <div className="dont-do-icon-box">
                                        <img src='/static/assets/resources/icons/Add document.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/sales.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/bookkeeping.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/customersupport.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/money.png' height="50px"/>
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
                                        <img src='/static/assets/resources/icons/user.png' height="50px"/>
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
            <Pricing/>
            </div>
                <Footer/>
            </div>
        );
    }
}

export default WhatWeDo;
