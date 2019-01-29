import React, {Component} from 'react';

import {sendRequest} from "../../services/server";
import GraphicHeader from "../../src/components/GraphicHeader";
import './style.css';
import Head from "next/head";
import HeadBar from "../../src/components/HeadBar";
import Footer from "../../src/components/Footer";

class Testimonial extends Component {

    render() {

        return (
            <div>
                <Head>
                    <title>Wishup</title>
                    <title>Affordable Virtual Assistants, Price For Virtual/ Remote Assistant Services </title>
                    <meta name="description"
                          content="Wishup.co offers Virtual Assistant services at affordable prices. Hire a virtual assistant in USA, UK, Canada, India or anywhere and let your VA take care of your priorities."/>
                    <meta property="og:title"
                          content="Affordable Virtual Assistants, Price For Virtual/ Remote Assistant Services "/>
                    <meta property="og:description"
                          content="Wishup.co offers Virtual Assistant services at affordable prices. Hire a virtual assistant in USA, UK, Canada, India or anywhere and let your VA take care of your priorities. "/>
                    <link rel="canonical" href="/virtual-assistant-pricing"/>
                    <link rel="manifest" href="/static/wishup.png"></link>
                    <link rel="icon" href="/static/wishup.png"></link>
                    <meta name="viewport"
                          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
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
                <div className="testiomonials">
                    <GraphicHeader
                        title="Testimonials"
                        description="This is what industry leader say about wishup"
                        image='url("/static/assets/resources/why-wishup/header.png")'
                    ></GraphicHeader>
                    <div className="wishup-container">
                        <div className="testimonial-section">
                            <div className="wishup-container">
                                <h2>
                                    Unbelievable? Read to Believe
                                </h2>
                                <div className="red-strip"></div>
                                <div className="description">
                                    <div className="mobile-bar"></div>
                                    Virtual assistants are go-to for many thriving businesses and entrepreneurs across
                                    the globe. Don’t believe it? <a href="/testimonial"> Read what people have to
                                    say</a>
                                </div>
                                <div className="row ">


                                    <div className="col-sm-4" key={1}>
                                        <div className="profile-desc mobile-only">

                                            <div className="profile-pic">
                                                <img src='/static/assets/pranay.jpeg' height="55px"/>
                                            </div>
                                            <div className="profile-info">

                                                <span className="name"> Pranay Gupta</span>
                                                <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                                    <img src='/static/assets/linkedin-button.svg' height="15px"
                                                         className="linkedin"/>
                                                </a>
                                                <br></br>
                                                <span className="position"> Co-Founder</span>,<span
                                                className="company-name"> 91Springboards</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            I have been using the services of a Virtual assistant from Wishup for few
                                            months now and I must say they are professional, trustworthy and highly
                                            competent.
                                        </div>
                                        <div className="profile-desc desktop-only">

                                            <div className="profile-pic">
                                                <img src='/static/assets/pranay.jpeg' height="55px"/>
                                            </div>
                                            <div className="profile-info desktop-only">

                                                <span className="name"> Pranay Gupta</span>
                                                <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                                    <img src='/static/assets/linkedin-button.svg' height="15px"
                                                         className="linkedin"/>
                                                </a>
                                                <br></br>
                                                <span className="position"> Co-Founder</span>,<span
                                                className="company-name"> 91Springboards</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4" key={2}>
                                        <div className="profile-desc mobile-only">
                                            <div className="profile-pic">
                                                <img src='/static/assets/manan.jpeg' height="55px"/>
                                            </div>
                                            <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                                <span className="position"> Co-Founder</span>,<span
                                                className="company-name"> Recruiter Flow</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            We've had a great experience working with Upasana and WIshup. I can not
                                            recommend it enough for anyone looking for a talented freelancer to
                                            accelerate your growth.
                                        </div>
                                        <div className="profile-desc desktop-only">
                                            <div className="profile-pic">
                                                <img src='/static/assets/manan.jpeg' height="55px"/>
                                            </div>
                                            <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                                <span className="position"> Co-Founder</span>,<span
                                                className="company-name"> Recruiter Flow</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-sm-4" key={3}>
                                        <div className="profile-desc mobile-only">
                                            <div className="profile-pic">
                                                <img src='/static/assets/Farhan.jpg' height="55px"/>
                                            </div>
                                            <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                                <span className="position"> Founder</span>,<span
                                                className="company-name"> Confetti Holdings</span>
                                            </div>
                                        </div>
                                        <div className="card">
                                            I have been using the services of Wishup for close to half a year now and I
                                            truly feel this is one of the best investments I have made.
                                        </div>
                                        <div className="profile-desc desktop-only">
                                            <div className="profile-pic">
                                                <img src='/static/assets/Farhan.jpg' height="55px"/>
                                            </div>
                                            <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                                <span className="position"> Founder</span>,<span
                                                className="company-name"> Confetti Holdings</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Testimonial;
