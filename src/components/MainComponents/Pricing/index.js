import React, { Component } from 'react';
import './testimonial.css';
import getPricing from "../../../services/location";
class Pricing extends Component {
    constructor(){
        super();
        this.state = { price: getPricing() };
    }



  render(){
return(
      <div className="pricing-bar">
          <div className="wishup-container">
              <div className="heading">
                  Tailor-made plans to suit every workload.
              </div>
              <div className="description">
                  Starting at {this.state.price.image?<img src={this.state.price.whitesign} height="10px"/>:this.state.price.sign}{this.state.price.mini}/month
              </div>
              <div className="cta">
                  <a href="/">
                      <div className="button">Get Started</div>
                  </a>
                  <a href="/virtual-assistant-pricing/">
                      <div className="button">Plan and Pricing</div>
                  </a>
              </div>
          </div>
      </div>
);
  }
}

export default Pricing;
