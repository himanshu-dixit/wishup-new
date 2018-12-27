import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import Form from "../../components/Form";
import getPricing from "../../services/location";
import MetaTags from "react-meta-tags";
import data from './data'

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

                          <div className="description">
                              <div className="mobile-bar"></div>
                              Do you think your business would soar if you got the right assistance? Struggling to check tasks off your to-do list? Your Virtual Employee is trained and ready to handle recurrent and specialized tasks. Try us!
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
                                          <li>So much more</li>
                                      </ul>
                                  </div>
                              </div>
                              {/*<div className="button">*/}
                                  {/*More Services*/}
                              {/*</div>*/}

                          </div>
                          </div>
                      </div>
                      <div className="col-sm-6 center mobile-only">
                          <img src={require('../../assets/resources/thinking.png')} width="80%"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="testimonial-section">
              <div className="wishup-container">
                  <h2>
                      We have best virtual assistants
                  </h2>
                  <div className="red-strip"></div>
                  <div className="description">
                      <div className="mobile-bar"></div>
                      It's not just us who say it but our clients who express it to us, everyday. <a href="/testimonial"> Read what people have to say</a>
                  </div>
                  <div className="row ">


                          <div className="col-sm-4" key={1}>
                              <div className="card">
                                  I have been using the services of a Virtual assistant from Wishup for few months now and I must say they are professional, trustworthy and highly competent.
                              </div>
                              <div className="profile-desc">
                              <div className="profile-pic">
                                  <img src={require('../../assets/pranay.jpeg')} height="55px"/>
                              </div>
                              <div className="profile-info">

                                  <span className="name"> Pranay Gupta</span>
                                  <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                      <img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                                  </a>
                                  <br></br>
                                  <span className="position"> Co-Founder</span>,<span className="company-name"> 91Springboards</span>
                              </div>
                              </div>
                          </div>
                          <div className="col-sm-4" key={2}>
                              <div className="card">
                                  We've had a great experience working with Upasana and WIshup. I can not recommend it enough for anyone looking for a talented freelancer to accelerate your growth.
                              </div>
                              <div className="profile-desc">
                              <div className="profile-pic">
                                  <img src={require('../../assets/manan.jpeg')} height="55px"/>
                              </div>
                              <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                              </a>
                              </span ><br></br>
                                  <span className="position"> Co-Founder</span>,<span className="company-name"> Recruiter Flow</span>
                              </div>
                                </div>

                          </div>
                          <div className="col-sm-4" key={3}>
                              <div className="card">
                                  I have been using the services of Wishup for close to half a year now and I truly feel this is one of the best investments I have made.
                              </div>
                              <div className="profile-desc">
                              <div className="profile-pic" >
                                  <img src={require('../../assets/Farhan.jpg')} height="55px"/>
                              </div>
                              <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                  <span className="position"> Founder</span>,<span className="company-name"> Confetti Holdings</span>
                              </div>
                              </div>
                          </div>

                          {/*<div className="col-sm-4" key={4}>*/}
                              {/*<div className="card">*/}
                                  {/*I couldn't be more thrilled with my Wishup VA! It took me a few weeks to get the time to organize the work to assign initially, but it's been the best business decision for me this year.*/}
                              {/*</div>*/}
                              {/*<div className="profile-pic" >*/}
                                  {/*<img src={require('../../assets/andrew.jpeg')} height="55px"/>*/}
                              {/*</div>*/}
                              {/*<div className="profile-info">*/}

                              {/*<span className="name">Andrew McDermott*/}

                                    {/*<a href="https://www.linkedin.com/in/andrewmcdermott/" target="_blank">*/}
                                  {/*<img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>*/}
                              {/*</a>*/}
                              {/*</span><br></br>*/}
                                  {/*<span className="position"> Full-Time Traveler</span>,<span className="company-name"></span>*/}
                              {/*</div>*/}
                          {/*</div>*/}

                          {/*<div className="col-sm-4" key={5}>*/}
                              {/*<div className="card">*/}
                                  {/*First I was skeptical about the whole VA game. But when I started my trial at Wishup this completely changed. Now I can really feel the value (and power!) a VA can have.*/}
                              {/*</div>*/}
                              {/*<div className="profile-pic" >*/}
                                  {/*<img src={require('../../assets/neil.jpg')} height="55px"/>*/}
                              {/*</div>*/}
                              {/*<div className="profile-info">*/}

                              {/*<span className="name">Niels Van De Bergh*/}

                                    {/*<a href="https://www.linkedin.com/in/nielsvandenbergh/" target="_blank">*/}
                                  {/*<img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>*/}
                              {/*</a>*/}
                              {/*</span><br></br>*/}
                                  {/*<span className="position"> Growth Consultant</span>,<span className="company-name"></span>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                  </div>
                  <div className="row ">



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
                      <a href="/virtual-assistant-pricing/">
                         <div className="button">Plan and Pricing</div>
                      </a>
                  </div>
              </div>
          </div>



          <div className="va-section">
              <div className="wishup-container">
                  <h2>
                  Meet Some Of our Virtual employees
                  </h2>

                  <div className="description">
                  <div className="mobile-bar"></div>
                  Working with a Virtual Employee is easier than ever before. Request a consultation, connect with our client support team, list out your requirements, find your VE, connect and start delegating almost immediately
                  </div>
                  <div className="row slider">
                      <button className=" previous" onClick={this.previous}>
                          <img src={require('../../assets/previous-icon.png')} height="45px"/>
                      </button>
                      <button className=" next" onClick={this.next}>
                          <img src={require('../../assets/next-icon.png')} height="45px"/>
                      </button>
                      <Slider ref={c => (this.slider = c)} {...settings}>
                          <div className="col-sm-3" key={1}>
                              <div className="card">
                                  <div>
                                      <img src={require('../../assets/resources/userr.png')} height="115px"/>
                                  </div>
                                  <div className="user-name">
                                      Shweta
                                  </div>
                                  <div className="user-desc">
                                      A computer science graduate with over 9 years of experience in the field of web development, web sales, e-marketing and customer relationships.
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-3" key={2}>
                              <div className="card">
                                  <div>
                                      <img src={require('../../assets/resources/userr.png')} height="115px"/>
                                  </div>
                                  <div className="user-name">
                                      Shweta
                                  </div>
                                  <div className="user-desc">
                                      A computer science graduate with over 9 years of experience in the field of web development, web sales, e-marketing and customer relationships.
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-3" key={3}>
                              <div className="card">
                                  <div>
                                      <img src={require('../../assets/resources/userr.png')} height="115px"/>
                                  </div>
                                  <div className="user-name">
                                      Swati
                                  </div>
                                  <div className="user-desc">
                                      A Software Engineer turned Virtual Assistant, now donning the hat of Training Manager at Wishup. I enjoy the variety my role offers at Wishup.
                                  </div>

                              </div>
                          </div>
                          <div className="col-sm-3" key={4}>
                              <div className="card">
                                  <div>
                                      <img src={require('../../assets/resources/userr.png')} height="115px"/>
                                  </div>
                                  <div className="user-name">
                                      Saloni
                                  </div>
                                  <div className="user-desc">
                                      A MBA Finance graduate and campus placed with one of the India biggest Private sector bank as a Wealth Manager. Client Management is my expertise and with Wishup.
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-3" key={5}>
                              <div className="card">
                                  <div>
                                      <img src={require('../../assets/resources/userr.png')} height="115px"/>
                                  </div>
                                  <div className="user-name">
                                      Mallika
                                  </div>
                                  <div className="user-desc">
                                      My previous career involved travelling across the world and it helped me understand the importance of superior customer service skills and time-management.
                                  </div>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default LocationPage;
