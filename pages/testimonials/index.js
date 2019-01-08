import React, { Component } from 'react';

import {sendRequest} from "../../services/server";
import GraphicHeader from "../../src/components/GraphicHeader";
import './style.css';

class Dashboard extends Component {

    render() {

        return (
            <div className="homepage">
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
                                Virtual Employees are go-to for many thriving businesses and entrepreneurs across the globe. Don’t believe it? <a href="/testimonial"> Read what people have to say</a>
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
                                                <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                                            </a>
                                            <br></br>
                                            <span className="position"> Co-Founder</span>,<span className="company-name"> 91Springboards</span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        I have been using the services of a Virtual assistant from Wishup for few months now and I must say they are professional, trustworthy and highly competent.
                                    </div>
                                    <div className="profile-desc desktop-only">

                                        <div className="profile-pic">
                                            <img src='/static/assets/pranay.jpeg' height="55px"/>
                                        </div>
                                        <div className="profile-info desktop-only">

                                            <span className="name"> Pranay Gupta</span>
                                            <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                                <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                                            </a>
                                            <br></br>
                                            <span className="position"> Co-Founder</span>,<span className="company-name"> 91Springboards</span>
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
                              </span ><br></br>
                                            <span className="position"> Co-Founder</span>,<span className="company-name"> Recruiter Flow</span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        We've had a great experience working with Upasana and WIshup. I can not recommend it enough for anyone looking for a talented freelancer to accelerate your growth.
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
                              </span ><br></br>
                                            <span className="position"> Co-Founder</span>,<span className="company-name"> Recruiter Flow</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-sm-4" key={3}>
                                    <div className="profile-desc mobile-only">
                                        <div className="profile-pic" >
                                            <img src='/static/assets/Farhan.jpg' height="55px"/>
                                        </div>
                                        <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                            <span className="position"> Founder</span>,<span className="company-name"> Confetti Holdings</span>
                                        </div>
                                    </div>
                                    <div className="card">
                                        I have been using the services of Wishup for close to half a year now and I truly feel this is one of the best investments I have made.
                                    </div>
                                    <div className="profile-desc desktop-only">
                                        <div className="profile-pic" >
                                            <img src='/static/assets/Farhan.jpg' height="55px"/>
                                        </div>
                                        <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                            <span className="position"> Founder</span>,<span className="company-name"> Confetti Holdings</span>
                                        </div>
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

export default Dashboard;
