import React, { Component } from 'react';
import './testimonial.css';
import getPricing from "../../../services/location";
class TasksList extends Component {
    constructor(){
        super();
    }



  render(){
    return(
        <div>
            <div className="description">
                <div className="mobile-bar"></div>
                Do you think your business would soar if you got the right assistance? Struggling to check tasks off your to-do list? Your Virtual Assistant is trained and ready to handle recurrent and specialized tasks. Try us!
            </div>
            <div className="service-list">
                <div className="row">
                    <div className="col-sm-6">
                        <ul>
                            <li><a href="/hire-administritive-assistant">Administrative tasks</a></li>
                            <li><a href="/hire-socialmedia-assistant">Social Media</a></li>
                            <li><a href="/hire-research-assistant">Online Research</a></li>
                            <li><a href="#">Invoicing and Payments</a></li>
                            <li><a href="/hire-ecommerce-assistant">Ecommerce assistant</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul className="second-ul">
                            <li><a href="#">Project Management</a></li>
                            <li><a href="/hire-email-assistant">E-mail Management</a></li>
                            <li><a href="/hire-bookkeeping-assistant">Bookkeeping</a></li>
                            <li><a href="/hire-personal-assistant">Personal tasks</a></li>
                            <li><a href="/what-we-do">So much more</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
  }
}

export default TasksList;
