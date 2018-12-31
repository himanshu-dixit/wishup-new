import React, { Component } from 'react';
import './testimonial.css';

class Testimonial extends Component {

  render(){
    //<Link to='/'>Home</Link>
    return (
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
                                <img src={require('../../../assets/pranay.jpeg')} height="55px"/>
                            </div>
                            <div className="profile-info">

                                <span className="name"> Pranay Gupta</span>
                                <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                    <img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
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
                                <img src={require('../../../assets/pranay.jpeg')} height="55px"/>
                            </div>
                            <div className="profile-info desktop-only">

                                <span className="name"> Pranay Gupta</span>
                                <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                    <img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                                </a>
                                <br></br>
                                <span className="position"> Co-Founder</span>,<span className="company-name"> 91Springboards</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" key={2}>
                        <div className="profile-desc mobile-only">
                            <div className="profile-pic">
                                <img src={require('../../../assets/manan.jpeg')} height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
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
                                <img src={require('../../../assets/manan.jpeg')} height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                              </a>
                              </span ><br></br>
                                <span className="position"> Co-Founder</span>,<span className="company-name"> Recruiter Flow</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4" key={3}>
                        <div className="profile-desc mobile-only">
                            <div className="profile-pic" >
                                <img src={require('../../../assets/Farhan.jpg')} height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
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
                                <img src={require('../../../assets/Farhan.jpg')} height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                <span className="position"> Founder</span>,<span className="company-name"> Confetti Holdings</span>
                            </div>
                        </div>
                    </div>

                    {/*<div className="col-sm-4" key={4}>*/}
                    {/*<div className="card">*/}
                    {/*I couldn't be more thrilled with my Wishup VA! It took me a few weeks to get the time to organize the work to assign initially, but it's been the best business decision for me this year.*/}
                    {/*</div>*/}
                    {/*<div className="profile-pic" >*/}
                    {/*<img src={require('../../../assets/andrew.jpeg')} height="55px"/>*/}
                    {/*</div>*/}
                    {/*<div className="profile-info">*/}

                    {/*<span className="name">Andrew McDermott*/}

                    {/*<a href="https://www.linkedin.com/in/andrewmcdermott/" target="_blank">*/}
                    {/*<img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>*/}
                    {/*</a>*/}
                    {/*</span><br></br>*/}
                    {/*<span className="position"> Full-Time Traveler</span>,<span className="company-name"></span>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className="col-sm-4" key={5}>*/}
                    {/*<div className="card">*/}
                    {/*First I was skeptical about the whole VA game. But when I started my trial at Wishup this completely changed. Now I can really feel the value (and power!) a VA can have.*/}
                    {/*</div>*/}
                    {/*<div className="profile-pic" >*/}
                    {/*<img src={require('../../../assets/neil.jpg')} height="55px"/>*/}
                    {/*</div>*/}
                    {/*<div className="profile-info">*/}

                    {/*<span className="name">Niels Van De Bergh*/}

                    {/*<a href="https://www.linkedin.com/in/nielsvandenbergh/" target="_blank">*/}
                    {/*<img src={require('../../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>*/}
                    {/*</a>*/}
                    {/*</span><br></br>*/}
                    {/*<span className="position"> Growth Consultant</span>,<span className="company-name"></span>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default Testimonial;
