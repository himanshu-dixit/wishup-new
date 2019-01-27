import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import Form from "../../src/components/Form";
import getPricing from "../../src/services/location";
import MetaTags from 'react-meta-tags';
import Testimonial from "../../src/components/MainComponents/Testimonial";
import VAsList from "../../src/components/MainComponents/VAsList";
import Pricing from "../../src/components/MainComponents/Pricing";
import TasksList from "../../src/components/MainComponents/TasksList";
import Media from "../../src/components/MainComponents/Media";
import Head from 'next/head'
import HeadBar from "../../src/components/HeadBar";
import Footer from "../../src/components/Footer";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

  render() {

    return (
      <div>
          <Head>
              <title>Become a Virtual Assistant</title>
              <meta name="description" content="Looking for the best virtual assistant services online? Welcome to Wishup.co. Our dedicated team of Virtual (remote) assistants understand your need and takes care of your priorities. Hire a virtual assistant today! Services available for USA, UK, Canada, India and more."/>
              <meta property="og:title" content="Best Virtual Assistant Services Online, Hire a Virtual Assistant"/>
              <meta property="og:description" content="Looking for the best virtual assistant services online? Welcome to Wishup.co. Our dedicated team of Virtual (remote) assistants understand your need and takes care of your priorities. Hire a virtual assistant today! Services available for USA, UK, Canada, India and more."/>
              <link rel="canonical" href="https://www.wishup.co/" />
              <link rel="manifest" href="/static/wishup.png"></link>
              <link rel="icon" href="/static/wishup.png"></link>

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

              <div className="new-cover"
                   style={{backgroundImage: "url(" + '/static/assets/blue-background.png' + ")"}}>
                  <div className="wishup-container">
                      <div className="container-fluid">
                          <div className="row">

                              <div className="col-md-7">
                          <div className="cover-info">
                              <h1 className="wishup-tagline">Get Work Done.<br></br> Remotely.</h1>
                              <h2 className="wishup-desc">Virtual assistant for Entrepreneurs,<br></br>
                                  Small Teams and Businesses.
                              </h2>
                          </div>
                              </div>
                              <div className="col-md-5">
                                  <Form/>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>



          <div className="grow-business-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-6 center desktop-only">
                          <img src={'/static/assets/resources/thinking.png'} width="80%"/>
                      </div>
                      <div className="col-sm-6">
                          <div className="grow-description">
                          <h2>
                              What is a virtual assistant or remote employee?
                          </h2>
                              <div className="description">
                                  <div className="mobile-bar"></div>
                                  A virtual assistant is a remote employee who assists varied businesses and entrepreneurs on business related and personal tasks. They operate out of home and have access to a laptop in good condition and reliable internet speed. They’re trained on numerous business related tasks which range from research, lead generation, social media management, travel planning, administrative tasks and more.
                                  A virtual assistant is a graduate or above with certain level of experience in their respective fields. They are tech-savvy and have the ability to multi-task and quickly adapt to new trends. Virtual assistants have good communication skills, both written and verbal and demonstrate a smart, friendly and self-driven personality.
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-6 center mobile-only">
                          <img src={'/static/assets/resources/thinking.png'} width="80%"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="super-highlight-bar">
              <div className="row">
                  <div className="col-sm-5 super-highlight-box">
                  </div>
                  <div className="col-sm-7 green-highlight-box">
                      <div className="wishup-container">
                          <h2>
                              Why you should do it?
                          </h2>
                          <div className="highlight-description">
                              Each of our virtual assistants have had varied motivation to become one! A virtual assistant role is perfect for anyone looking to be financially independent, have a flexible working schedule, have personal commitments to cater to, looking to resume after career-break, believes in the future of remote working, aspires to be or is a digital nomad.
                              <br></br>
                              If you feel that you have a reason to be a part of the remote working culture, then there’s lot in it for you to discover.
                          </div>


                      </div>
                  </div>
              </div>
          </div>

          <Media/>

          <div className="second-highlight-bar">

                  <div className="row">
                      <div className="col-sm-5 super-highlight-box mobile-only">

                      </div>
                      <div className="col-sm-7">
                          <div className="wishup-container">
                          <h2>
                              What’s in it for you?
                          </h2>
                          <div className="mobile-bar"></div>
                          <div className="description">
                              <ul>
                                  <li>Don’t have to worry about learning new market trends and tools. You’re constantly upskilled. </li>
                               <li>Don’t have to worry about finding clients and managing them. There’s a team for you to do it! </li>
                                  <li>Our tests map out your strengths and weaknesses and accordingly we align you with respective businesses and requirements.</li>
                                  <li>You don’t have to fret over payments. They are made promptly and on-time. </li>
                                  <li>Get access to working with people from diverse industries.</li>
                                  <li>Since remote working is a relatively new concept, you need not fret over establishing yourself as a brand.</li>
                              </ul>
                          </div>
                          </div>
                      </div>
                      <div className="col-sm-5 super-highlight-box desktop-only">
                      </div>

                  </div>

          </div>



          <VAsList type="become-va"/>

          <div className="va-bar">
              <div className="wishup-container">
                  <div><div className="va-bar-text">
                      <div className="va-text"> Become a Virtual Assistant </div></div><div className="line"></div><a href="https://www.wishup.co/become-a-virtual-assistant"> <div className="hire-cta wishup">Get started</div></a></div>
              </div>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default HomePage;
