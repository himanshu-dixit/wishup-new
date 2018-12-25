import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';
import getPricing from "../../services/location";

class WhyWishup extends Component {

    constructor(props){
        super(props);
        this.state = { width: 0, height: 0, price: getPricing()  };
    }

  render() {

    return (
      <div className="why-wishup">
          <GraphicHeader
              title="Why Wishup"
              description="Bringing you the best talent possible"
              image={"url(" + require('../../assets/resources/why-wishup/header.png') + ")"}
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
                                      <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                                  </div>
                                  <div className="description-box">5 Years+ experience</div>
                              </div>
                              <div className="list-item">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                                  </div>
                                  <div className="description-box">Serious vetting process- Only 2-3% selected from the total applications.</div>
                              </div>

                              <div className="list-item">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                                  </div>
                                  <div className="description-box">Well-qualified and diverse skill-sets.!</div>
                              </div>

                          </div>


                      </div>
                      <div className="col-md-6 image-container">
                          <img src={require('../../assets/resources/why-wishup/1.png')} className="featured-section-image"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="why-wishup-section ">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6 image-container left-image-container desktop-only">
                          <img src={require('../../assets/resources/why-wishup/2.png')} className="featured-section-image"/>
                      </div>
                      <div className="col-md-6">
                          <h2>Virtual Employees Upskilled
                              and Ready to Start Now</h2>
                          <div className="section-description">
                              <div className="mobile-bar"></div>
                              Your VE is hand-picked, rigorously trained and ready to work on your tasks. </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                              </div>
                              <div className="description-box">1 month of rigorous in-house training</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                              </div>
                              <div className="description-box">Training on 50+ business and executive related tasks</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                              </div>
                              <div className="description-box">All virtual employees professionally managed by Wishup</div>
                          </div>

                      </div>
                      <div className="col-md-6 image-container left-image-container mobile-only">
                          <img src={require('../../assets/resources/why-wishup/2.png')} className="featured-section-image"/>
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
                                  <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                              </div>
                              <div className="description-box">No hassle-replacement</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                              </div>
                              <div className="description-box">Account Manager to troubleshoot</div>
                          </div>
                          <div className="list-item">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>
                              </div>
                              <div className="description-box">One-email and we’ll find your a VE to suit your needs!</div>
                          </div>

                      </div>
                      <div className="col-md-6 image-container">
                          <img src={require('../../assets/resources/why-wishup/3.png')} className="featured-section-image"/>
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
                      <a href="/pricing">
                          <div className="button">Plan and Pricing</div>
                      </a>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default WhyWishup;
