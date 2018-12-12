import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';

class WhyWishup extends Component {

  render() {

    return (
      <div>
          <GraphicHeader
              title="Whu Wishup"
              description="Bringing you the best talent possible"
              image={"url(" + require('../../assets/resources/why-wishup/header.png') + ")"}
          ></GraphicHeader>

          <div className="why-wishup-section grey-container">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6">
                          <h2>Bringing you the best talent possible</h2>
                          <div className="section-description">You don’t need to sift through thousands of applications to find the most suited employee for any particular task or project. We’ve done that for you to bring you the best.</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                      </div>
                      <div className="col-md-6 image-container">
                          <img src={require('../../assets/resources/why-wishup/1.png')} width="70%"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="why-wishup-section ">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6 ">
                          <img src={require('../../assets/resources/why-wishup/2.png')} width="70%"/>
                      </div>
                      <div className="col-md-6">
                          <h2>Virtual Employees Upskilled
                              and Ready to Start Now</h2>
                          <div className="section-description">You don’t need to sift through thousands of applications to find the most suited employee for any particular task or project. We’ve done that for you to bring you the best.</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                      </div>

                  </div>
              </div>
          </div>

          <div className="why-wishup-section grey-container">
              <div className="wishup-container ">
                  <div className="row">
                      <div className="col-md-6">
                        <h2>Not serving your purpose? It’s simple.</h2>
                        <div className="section-description">You don’t need to sift through thousands of applications to find the most suited employee for any particular task or project. We’ve done that for you to bring you the best.</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                          <div className="list-item"><img src={require('../../assets/resources/why-wishup/tick.png')} width="20px"/>5 Years+ experience</div>
                      </div>
                      <div className="col-md-6 image-container">
                          <img src={require('../../assets/resources/why-wishup/3.png')} width="70%"/>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default WhyWishup;
