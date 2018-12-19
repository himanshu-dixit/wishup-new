import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';

class WhyWishup extends Component {

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
                              You don’t need to sift through thousands of applications to find the most suited employee for any particular task or project. We’ve done that for you to bring you the best.</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>Serious vetting process- Only 2-3% selected from the total applications.</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>Well-qualified and diverse skill-sets.!</div>
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
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>1 month of rigorous in-house training</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>Training on 50+ business and executive related tasks</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>All virtual employees professionally managed by Wishup
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
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>No hassle-replacement</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>Account Manager to troubleshoot</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>One-email and we’ll find your a VE to suit your needs!</div>
                      </div>
                      <div className="col-md-6 image-container">
                          <img src={require('../../assets/resources/why-wishup/3.png')} className="featured-section-image"/>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default WhyWishup;
