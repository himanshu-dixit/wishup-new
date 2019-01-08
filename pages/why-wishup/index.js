import React, { Component } from 'react';
import './style.css';
import '../index/style.css';
import GraphicHeader from '../../src/components/GraphicHeader';
import getPricing from "../../src/services/location";
import MetaTags from "react-meta-tags";
import Pricing from "../../src/components/MainComponents/Pricing";
import HeadBar from "../../src/components/HeadBar";
import Footer from "../../src/components/Footer";
import Head from "next/head";

class WhyWishup extends Component {

    constructor(props){
        super(props);
        this.state = { width: 0, height: 0, price: getPricing()  };
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
      <div className="why-wishup">
          <MetaTags>
              <title>Why Hire A Virtual Assistant? | Wishup</title>
              <link rel="canonical" href="/why-wishup"/>
                  <meta property="og:url" content="https://www.zirtual.com/why-zirtual"/>
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
              title="Why Wishup"
              description="Bringing you the best talent possible"
              image='url("static/assets/resources/why-wishup/header.png")'
          ></GraphicHeader>

          <div className="why-wishup-section grey-container">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6">
                          <h2>Bringing you the best talent possible</h2>

                          <div className="section-description">
                              <div className="mobile-bar"></div>
                              You don’t need to sift through thousands of applications to find the most suited employee for any particular task or project. We’ve done that for you to bring you the best.

                              <div className="list-item">
                                  <div className="icon-box">
                                      <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                                  </div>
                                  <div className="description-box">5 Years+ experience</div>
                              </div>
                              <div className="list-item">
                                  <div className="icon-box">
                                      <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                                  </div>
                                  <div className="description-box">Serious vetting process- Only 2-3% selected from the total applications.</div>
                              </div>

                              <div className="list-item">
                                  <div className="icon-box">
                                      <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                                  </div>
                                  <div className="description-box">Well-qualified and diverse skill-sets.!</div>
                              </div>

                          </div>


                      </div>
                      <div className="col-md-6 image-container">
                          <img src='/static/assets/resources/why-wishup/1.png' className="featured-section-image"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="why-wishup-section ">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6 image-container left-image-container desktop-only">
                          <img src='/static/assets/resources/why-wishup/2.png' className="featured-section-image"/>
                      </div>
                      <div className="col-md-6">
                          <h2>Virtual Employees Upskilled
                              and Ready to Start Now</h2>
                          <div className="section-description">
                              <div className="mobile-bar"></div>
                              Your VE is hand-picked, rigorously trained and ready to work on your tasks. </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                              </div>
                              <div className="description-box">1 month of rigorous in-house training</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                              </div>
                              <div className="description-box">Training on 50+ business and executive related tasks</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                              </div>
                              <div className="description-box">All virtual employees professionally managed by Wishup</div>
                          </div>

                      </div>
                      <div className="col-md-6 image-container left-image-container mobile-only">
                          <img src='/static/assets/resources/why-wishup/2.png' className="featured-section-image"/>
                      </div>

                  </div>
              </div>
          </div>

          <div className="why-wishup-section grey-container">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6">
                        <h2>Not serving your purpose? It’s simple.</h2>
                        <div className="section-description">
                            <div className="mobile-bar"></div>
                            If you feel your present VE is a bad fit for your tasks, then feel free to connect with the support team and we’ll make it a smooth transition to the next one!</div>

                          <div className="list-item">
                              <div className="icon-box">
                                  <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                              </div>
                              <div className="description-box">No hassle-replacement</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                              </div>
                              <div className="description-box">Account Manager to troubleshoot</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src='/static/assets/resources/why-wishup/tick.png' width="20px"/>
                              </div>
                              <div className="description-box">One-email and we’ll find your a VE to suit your needs!</div>
                          </div>

                      </div>
                      <div className="col-md-6 image-container">
                          <img src='/static/assets/resources/why-wishup/3.png' className="featured-section-image"/>
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

export default WhyWishup;
