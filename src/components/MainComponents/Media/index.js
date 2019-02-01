import React, { Component } from 'react';
import './testimonial.css';
import Slider from "react-slick";
import getPricing from "../../../services/location";

class Media extends Component {

    render() {

    return (
        <div className="mentions">
            <h2>
                Wishup in Media
            </h2>
            <div className="red-strip"></div>
            <div className="wishup-container">
                <div className="row">
                    <a target="_blank" href="https://yourstory.com/2018/11/wishup-aims-help-mums-balance-careers-family-work-home-options/">
                        <div className="col-sm-4 left"><img src='/static/assets/resources/yourstory.png' height="25px"/> </div>
                    </a>
                    <a target="_blank" href="http://bwpeople.businessworld.in/article/GIG-economy-increase-in-contract-based-jobs/20-09-2018-160373/">
                        <div className="col-sm-4"><img src='/static/assets/resources/business-world.png' height="25px"/> </div>
                    </a>
                    <a target="_blank" href="https://economictimes.indiatimes.com/jobs/wishup-to-hire-400-people/articleshow/66421647.cms">
                        <div className="col-sm-4"><img src='/static/assets/resources/economic-times.png' height="25px"/> </div>
                    </a>
                    <a target="_blank" href="https://www.livemint.com/Leisure/JkinDpMBgPenrQBxWdeX6I/No-fixed-benefitsyet-gig-economy-rocks.html">
                        <div className="col-sm-4 left"><img src='/static/assets/resources/livemint.png' height="25px"/> </div>
                    </a>
                    <a target="_blank" href="https://www.moneycontrol.com/news/business/startup/how-wishup-is-bridging-gap-between-talented-individuals-and-corporates-looking-for-remote-employees-2872311.html">
                        <div className="col-sm-4"><img src='/static/assets/resources/moneycontrol.png' height="25px"/> </div>
                    </a>
                    <a href="https://epaper.telegraphindia.com/calcutta/2018-10-02/71/Page-15.html" target="_blank">
                        <div className="col-sm-4"><img src='/static/assets/resources/telegraph.png' height="25px"/> </div>
                    </a>
                </div>
            </div>
        </div>

    );
  }
}

export default Media;
