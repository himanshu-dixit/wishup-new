import React, { Component } from 'react';
import './style.css';

class HomePage extends Component {

  render() {

    return (
      <div>
        <div className="cover"
             style={{  backgroundImage: "url(" + require('../../assets/resources/cover.png') + ")"}}>
            <div className="wishup-container">
                <div className="container-fluid">
                    <div className="cover-info">
                        <h1 className="wishup-tagline">Get Work Done <br></br> Remotely</h1>
                        <div className="wishup-desc">Virtual Employees for Entrepreneurs,<br></br>
                            Small Teams and Businesses.</div>
                        <div className="hire-cta">Hire now</div>
                    </div>
                </div>
            </div>
        </div>
          <div className="mentions">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-md-4 left"><img src={require('../../assets/resources/yourstory.png')} height="25px"/> </div>
                      <div className="col-md-4"><img src={require('../../assets/resources/business-world.png')} height="25px"/> </div>
                      <div className="col-md-4"><img src={require('../../assets/resources/economic-times.png')} height="25px"/> </div>
                      <div className="col-md-4 left"><img src={require('../../assets/resources/livemint.png')} height="25px"/> </div>
                      <div className="col-md-4"><img src={require('../../assets/resources/moneycontrol.png')} height="25px"/> </div>
                      <div className="col-md-4"><img src={require('../../assets/resources/telegraph.png')} height="25px"/> </div>
                  </div>
              </div>
          </div>

          <div className="assistance-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-md-5">
                          <div style={{  backgroundImage: "url(" + require('../../assets/resources/VA.png') + ")"}} className="va-backdrop">
                              Do you think your business <br></br>would soar if you got the<br></br>right assistance?
                          </div>
                      </div>
                      <div className="col-md-7">
                          <div className="assistance-description">
                          Your Virtual Employee is an ideal and efficient resource to help you handle recurrent and specialized tasks. All our Wishup Virtual Employees are skilled and trained to handle your tasks and give you great result

                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="grow-business-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-md-6 center">
                          <img src={require('../../assets/resources/thinking.png')} width="80%"/>
                      </div>
                      <div className="col-md-6">
                          <h2>
                          Grow your business with a Wishup Virtual Employee
                          </h2>

                          <div className="description">
                             Do you need help with one or more aspects of your business? Are you struggling to check tasks off your to-do list? Your Virtual Employee is an ideal and efficient resource to help you handle recurrent and specialized tasks. All our Wishup Virtual Employees are skilled and trained to handle your tasks and give you great results
                          </div>
                          <div className="service-list">
                              <div className="row">
                                  <div className="col-md-6">
                                      <ul>
                                          <li>Bookkeeping </li>
                                          <li>E-commerce assistance</li>
                                          <li>Email management</li>
                                          <li>Administrative tasks</li>
                                      </ul>
                                  </div>
                                  <div className="col-md-6">
                                      <ul>
                                          <li>Online research</li>
                                          <li>Lead Generation</li>
                                          <li>Social Mediat</li>
                                          <li>Administrative tasks</li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="secondary-description">
                                  Our virtual employees will add great value to your business by managing appointments, inbox, social media, content creation and much more.
                              </div>
                              <div className="button">
                                  More Services
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="highlight-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-md-5">
                          <h2>
                          Skilled, multitasking experts? We call them our Virtual Employees
                          </h2>
                      </div>
                      <div className="col-md-7">
                          <div className="description">
                          At Wishup, we undertake a serious vetting process to find the most apt, multi-skilled workforce for our clients. Our Virtual Employees undergo numerous levels of evaluation ranging from communication skills, technical skills, multi-tasking ability and much more. Applications pour in from all over but we retain only 2-3% of them. We always find the best talent to work with
                              <br></br>
                              <div className="button">
                                  Get Started
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="team-pic" style={{  backgroundImage: "url(" + require('../../assets/resources/team.png') + ")"}}>
          </div>

          <div className="pricing-bar">
              <div className="wishup-container">
                  <div className="heading">
                  Plans starting at just $150/mo.
                  </div>

                  <div className="description">
                      Working with a Virtual Employee is easier than ever before. In just a few steps, you can get connected with your Virtual employee and begin delegating tasks almost immediately!
                      <br></br>Plans to fit every budget and keeping every requirement in mind
                  </div>
                  <div className="cta">
                      <div className="button">Request a consultation</div><br></br>
                  <div className="button">Plan and Pricing</div>
                  </div>
              </div>
          </div>

          <div className="va-section">
              <div className="wishup-container">
                  <h2>
                  Meet Some Of our Virtual employees
                  </h2>
                  <div className="description">
                  Working with a Virtual Employee is easier than ever before. Request a consultation, connect with our client support team, list out your requirements, find your VE, connect and start delegating almost immediately
                  </div>
                  <div className="row slider">
                      <div className="col-md-3">
                          <div className="card">
                          <div>
                          <img src={require('../../assets/resources/userr.png')} height="115px"/>
                          </div>
                          <div className="user-desc">
                             A Software Engineer turned Virtual Assistant, now donning the hat of Training Manager at Wishup. I enjoy the variety my role offers at Wishup, I get to learn and explore the latest in the online world.
                          </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="card">
                              <div>
                                  <img src={require('../../assets/resources/userr.png')} height="115px"/>
                              </div>
                              <div className="user-desc">
                                  A Software Engineer turned Virtual Assistant, now donning the hat of Training Manager at Wishup. I enjoy the variety my role offers at Wishup, I get to learn and explore the latest in the online world.
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="card">
                              <div>
                                  <img src={require('../../assets/resources/userr.png')} height="115px"/>
                              </div>
                              <div className="user-desc">
                                  A Software Engineer turned Virtual Assistant, now donning the hat of Training Manager at Wishup. I enjoy the variety my role offers at Wishup, I get to learn and explore the latest in the online world.
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="card">
                              <div>
                                  <img src={require('../../assets/resources/userr.png')} height="115px"/>
                              </div>
                              <div className="user-desc">
                                  A Software Engineer turned Virtual Assistant, now donning the hat of Training Manager at Wishup. I enjoy the variety my role offers at Wishup, I get to learn and explore the latest in the online world.
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          <div className="testimonial-section">
              <div className="wishup-container">
                  <h2>
                  Don't just take our word for it
                  </h2>
                  <div className="description">
                  Virtual Employees are go-to for many thriving businesses and entrepreneurs across the globe. Don’t believe it? Read what people have to say
                  </div>
                  <div className="row">
                      <div className="col-md-4">
                          <div className="card">
                              Now that I have Renee, my VA, to handle all the small stuff, I'm more productive. I'm closing more transactions, and I can finally exhale — truly enjoying my chosen career
                          </div>
                          <div className="profile-pic">
                              <img src={require('../../assets/resources/userr.png')} height="55px"/>
                          </div>
                          <div className="profile-info">

                              <span className="name"> Benji Rogerrs</span><br></br>
                              <span className="position"> CEO & Founder</span>,<span className="company-name"> Pledge Musi</span>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              Now that I have Renee, my VA, to handle all the small stuff, I'm more productive. I'm closing more transactions, and I can finally exhale — truly enjoying my chosen career
                          </div>
                          <div className="profile-pic">
                              <img src={require('../../assets/resources/userr.png')} height="55px"/>
                          </div>
                          <div className="profile-info">

                              <span className="name"> Benji Rogerrs</span><br></br>
                              <span className="position"> CEO & Founder</span>,<span className="company-name"> Pledge Musi</span>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              Now that I have Renee, my VA, to handle all the small stuff, I'm more productive. I'm closing more transactions, and I can finally exhale — truly enjoying my chosen career
                          </div>
                          <div className="profile-pic">
                              <img src={require('../../assets/resources/userr.png')} height="55px"/>
                          </div>
                          <div className="profile-info">

                              <span className="name"> Benji Rogerrs</span><br></br>
                              <span className="position"> CEO & Founder</span>,<span className="company-name"> Pledge Musi</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="va-bar">
              <div className="wishup-container">
                 <div>Become a Virtual Employee</div>  <div className="line"></div>
              </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
