import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import Form from "../../components/Form";
import getPricing from "../../services/location";
import MetaTags from "react-meta-tags";
import data from './data'
import Pricing from "../../components/MainComponents/pricing";
import VAsList from "../../components/MainComponents/VAsList";
import Testimonial from "../../components/MainComponents/Testimonial";
import TasksList from "../../components/MainComponents/TasksList";

class LocationPage extends Component {
    constructor(props) {
        super(props);
        this.type = props.match.params.type;
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = { width: 0, height: 0, price: getPricing() };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.type = this.type.replace('-virtual-assistants','');
        this.type = this.type.replace('-','');

        this.data = data;
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
  render() {
      var settings = {
          dots: false,
          infinite: true,
          slidesToShow: this.state.width<550?1:(this.state.width<850?2:4),
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true
      };
    return (
      <div className="location">
          <MetaTags>
              <title>{this.data[this.type].meta_title}</title>
              <meta name="description" content={this.data[this.type].meta_description}/>
              <meta property="og:title" content={this.data[this.type].og_title}/>
              <meta property="og:description" content={this.data[this.type].og_description}/>
              <link rel="canonical" href={"/hire-"+this.data+"-assistant"} />
          </MetaTags>

          <div className="new-cover"
               style={{backgroundImage: this.data[this.type].cover}}>
              <div className="wishup-container">
                  <div className="container-fluid">
                      <div className="row">

                          <div className="col-md-7">
                              <div className="cover-info">
                                  <h1 className="wishup-tagline">{this.data[this.type].name} Virtual Assistant Services</h1>
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


          <div className="grow-business-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-6 center desktop-only">
                          <img src={require('../../assets/resources/thinking.png')} width="80%"/>
                      </div>
                      <div className="col-sm-6">
                          <div className="grow-description">
                          <h2>
                              Based in {this.data[this.type].name} and looking for virtual assistants?
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
                          What are Virtual Assistants?
                      </h2>
                      <div className="highlight-description">
                          Virtual assistants are remote workers using digital technologies who double up as your research assistant, social media manager, bookkeeper and accountant, travel and administrative assistant and email and workflow experts. Virtual assistants handle reports, minutes, analytics, facts and figures. They also have offer research, social media and email management and a whole lot of other competencies. Basically, virtual assistants carry out every task you need to keep your business in order without compromising on cost efficiency
                      </div>
                      <div className="button">Get Started</div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="wishup-container location-va-type">
              <h2 className="first-heading">Looking for the right support for your business or professional practice?</h2>
              <div className="red-strip desktop-only"></div>
              <div className="mobile-bar"></div>
              <div className="description first-description">

                  You definitely need the best virtual assistant for all your time consuming, mundane tasks. Toronto businesses are growing rapidly and if you need a virtual assistant who can keep up, hire Wishup’s qualified, experienced and trained virtual assistants.
                  <br></br>
                  <br></br>
                  Choosing the right virtual assistant for the job is important. Saving effort, time or money while hiring a best virtual assistant with Wishup. Wishup is your full-service virtual assistant provider providing dedicated solutions for business and professional practices. Now, grow your business or professional practice with our skilled, experienced and qualified virtual assistants to give your business the winning edge.

              </div>
              <div className="container wishup-box">
                  <div className="row">

                      <div className="col-md-3">
                          <a href="/hire-administritive-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/Add document.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Administrative and Executive Assistant
                                  </div>
                              </div>
                          </a>
                      </div>

                      <div className="col-md-3">
                          <a href="/hire-socialmedia-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/socialmedia.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Social Media Assistant
                                  </div>
                              </div>
                          </a>
                      </div>


                      <div className="col-md-3">
                          <div className="what-we-do-card">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/icons/lead.svg') } height="50px"/>
                              </div>
                              <div className="task-title">
                                  Lead generation Assistant
                              </div>
                          </div>
                      </div>

                      <div className="col-md-3">
                          <a href="/hire-research-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/research.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Research Assistant
                                  </div>
                              </div>
                          </a>
                      </div>

                  </div>
                  <div className="row">
                      <div className="col-md-3">
                          <a href="/hire-bookkeeping-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/bookkeeping.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Bookkeeping Assistant
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-md-3">
                          <a href="/hire-email-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/mail.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Email Assistant
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="col-md-3">
                          <a href="/hire-hiring-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/hiring.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Hiring Assistant
                                  </div>
                              </div>
                          </a>
                      </div>

                      <div className="col-md-3">
                          <div className="what-we-do-card">
                              <div className="icon-box">
                                  <img src={require('../../assets/resources/icons/realestate.svg') } height="50px"/>
                              </div>
                              <div className="task-title">
                                  Real Estate Assistant
                              </div>
                          </div>
                      </div>

                  </div>

                  <div className="row">

                      <div className="col-md-3 col-sm-offset-5">
                          <a href="/hire-travel-assistant">
                              <div className="what-we-do-card">
                                  <div className="icon-box">
                                      <img src={require('../../assets/resources/icons/travel.svg') } height="50px"/>
                                  </div>
                                  <div className="task-title">
                                      Travel Assistant
                                  </div>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>

     <Pricing/>

          <VAsList/>
      </div>
    );
  }
}

export default LocationPage;
