import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import Form from "../../components/Form";
import getPricing from "../../services/location";
import MetaTags from 'react-meta-tags';
import Testimonial from "../../components/MainComponents/Testimonial";
import VAsList from "../../components/MainComponents/VAsList";
import Pricing from "../../components/MainComponents/Pricing";
import TasksList from "../../components/MainComponents/TasksList";
import Media from "../../components/MainComponents/Media";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

  render() {

    return (
      <div>
          <MetaTags>
              <title>Best Virtual Assistant Services Online, Hire a Virtual Assistant</title>
              <meta name="description" content="Looking for the best virtual assistant services online? Welcome to Wishup.co. Our dedicated team of Virtual (remote) assistants understand your need and takes care of your priorities. Hire a virtual assistant today! Services available for USA, UK, Canada, India and more."/>
              <meta property="og:title" content="Best Virtual Assistant Services Online, Hire a Virtual Assistant"/>
              <meta property="og:description" content="Looking for the best virtual assistant services online? Welcome to Wishup.co. Our dedicated team of Virtual (remote) assistants understand your need and takes care of your priorities. Hire a virtual assistant today! Services available for USA, UK, Canada, India and more."/>
              <link rel="canonical" href="http://www.wishup.co" />
          </MetaTags>

          {this.props.type == "new" ?
              <div className="new-cover"
                   style={{backgroundImage: "url(" + require('../../assets/blue-background.png') + ")"}}>
                  <div className="wishup-container">
                      <div className="container-fluid">
                          <div className="row">

                              <div className="col-md-7">
                          <div className="cover-info">
                              <h1 className="wishup-tagline">Get Work Done.<br></br> Remotely.</h1>
                              <div className="wishup-desc">Virtual Employees for Entrepreneurs,<br></br>
                                  Small Teams and Businesses.
                              </div>
                          </div>
                              </div>
                              <div className="col-md-5">
                                  <Form/>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
              :
              <div className="cover"
                   style={{backgroundImage: "url(" + require('../../assets/resources/cover.png') + ")"}}>
                  <div className="wishup-container">
                      <div className="container-fluid">
                          <div className="cover-info">
                              <h1 className="wishup-tagline">Get Work Done.<br></br> Remotely.</h1>
                              <div className="wishup-desc">Virtual Employees for Entrepreneurs,<br></br>
                                  Small Teams and Businesses.
                              </div>
                              <div className="hire-cta" onClick={() => {
                                  this.props.set("login")
                              }}>Get started
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          }


          <div className="grow-business-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-6 center desktop-only">
                          <img src={require('../../assets/resources/thinking.png')} width="80%"/>
                      </div>
                      <div className="col-sm-6">
                          <div className="grow-description">
                          <h2>
                          Grow your business with a Wishup Virtual Employee
                          </h2>

                            <TasksList/>
                          </div>
                      </div>
                      <div className="col-sm-6 center mobile-only">
                          <img src={require('../../assets/resources/thinking.png')} width="80%"/>
                      </div>
                  </div>
              </div>
          </div>
          <Testimonial/>


          <div className="super-highlight-bar">
              <div className="row">
                  <div className="col-sm-5 super-highlight-box">
                  </div>
                  <div className="col-sm-7 green-highlight-box">
                      <div className="wishup-container">
                      <h2>
                          Ready. Set. Go
                          Start Immediately with our Trained Employees
                      </h2>
                      <div className="highlight-description">
                          Working with a Virtual Employee is easier than ever before. Request a consultation, connect with our client support team, list out your requirements, find your VE, connect and start delegating almost immediately!
                      </div>
                          <a href="/">
                              <div className="button">Get Started</div>
                          </a>

                      </div>
                  </div>
              </div>
          </div>
          <div className="highlight-bar ">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-5">
                          <h2>
                              Skilled, multitasking experts? We call them our Virtual Employees
                          </h2>
                      </div>
                      <div className="col-sm-7">
                          <div className="mobile-bar"></div>
                          <div className="description">
                              At Wishup, we undertake a serious vetting process to find the most apt, multi-skilled workforce for our clients. Our Virtual Employees undergo numerous levels of evaluation ranging from communication skills, technical skills, multi-tasking ability and much more. Applications pour in from all over but we hire only 2-3% of them. We always find the best talent to work with.
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="team-pic" style={{  backgroundImage: "url(" + require('../../assets/resources/team.png') + ")"}}>
          </div>

          <Pricing/>

          <div className="second-highlight-bar">

                  <div className="row">
                      <div className="col-sm-5 super-highlight-box mobile-only">

                      </div>
                      <div className="col-sm-7">
                          <div className="wishup-container">
                          <h2>
                              Troubled with Recurrent Tasks? Let’s Automate it for you
                          </h2>
                          <div className="mobile-bar"></div>
                          <div className="description">
                              At Wishup, we undertake a serious vetting process to find the most apt, multi-skilled workforce for our clients. Our Virtual Employees undergo numerous levels of evaluation ranging from communication skills, technical skills, multi-tasking ability and much more. Applications pour in from all over but we hire only 2-3% of them. We always find the best talent to work with.

                          </div>
                          </div>
                      </div>
                      <div className="col-sm-5 super-highlight-box desktop-only">
                      </div>

                  </div>

          </div>




          <Media/>

          <VAsList/>

          <div className="va-bar">
              <div className="wishup-container">
                  <div><div className="va-bar-text">

                      <div className="va-text"> Become a Virtual Employee </div></div><div className="line"></div><a href="https://www.wishup.co/become-a-virtual-assistant"> <div className="hire-cta wishup">Get started</div></a></div>
              </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
