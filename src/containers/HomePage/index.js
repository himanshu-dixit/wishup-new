import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

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
      var settings2 = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: this.state.width<550?1:(this.state.width<850?2:3),
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true
      };
    return (
      <div>
        <div className="cover"
             style={{  backgroundImage: "url(" + require('../../assets/resources/cover.png') + ")"}}>
            <div className="wishup-container">
                <div className="container-fluid">
                    <div className="cover-info">
                        <h1 className="wishup-tagline">Get Work Done.<br></br> Remotely.</h1>
                        <div className="wishup-desc">Virtual Employees for Entrepreneurs,<br></br>
                            Small Teams and Businesses.</div>
                        <div className="hire-cta">Get started</div>
                    </div>
                </div>
            </div>
        </div>


          {/*<div className="assistance-bar">*/}
              {/*<div className="wishup-container">*/}
                  {/*<div className="row">*/}
                      {/*<div className="col-sm-5">*/}
                          {/*<div style={{  backgroundImage: "url(" + require('../../assets/resources/VA.png') + ")"}} className="va-backdrop">*/}
                              {/*Do you think your business <br></br>would soar if you got the<br></br>right assistance?*/}
                          {/*</div>*/}
                      {/*</div>*/}
                      {/*<div className="col-sm-7">*/}
                          {/*<div className="mobile-bar"></div>*/}
                          {/*<div className="assistance-description">*/}
                          {/*Your Virtual Employee is an ideal and efficient resource to help you handle recurrent and specialized tasks. All our Wishup Virtual Employees are skilled and trained to handle your tasks and give you great result*/}
                          {/*</div>*/}
                      {/*</div>*/}
                  {/*</div>*/}
              {/*</div>*/}
          {/*</div>*/}

          <div className="grow-business-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-6 center">
                          <img src={require('../../assets/resources/thinking.png')} width="80%"/>
                      </div>
                      <div className="col-sm-6">
                          <div className="grow-description">
                          <h2>
                          Grow your business with a Wishup Virtual Employee
                          </h2>

                          <div className="description">
                              <div className="mobile-bar"></div>
                              Do you think your business would soar if you got the right assistance? Struggling to check tasks off your to-do list? Your Virtual Employee is trained and ready to handle recurrent and specialized tasks. Try us!
                          </div>
                          <div className="service-list">
                              <div className="row">
                                  <div className="col-sm-6">
                                      <ul>
                                          <li>Administrative tasks</li>
                                          <li>Social Media</li>
                                          <li>Online Research</li>
                                          <li>Invoicing and Payments</li>
                                          <li>Ecommerce assistant</li>
                                      </ul>
                                  </div>
                                  <div className="col-sm-6">
                                      <ul className="second-ul">
                                          <li>Project Management</li>
                                          <li>E-mail Management</li>
                                          <li>Bookkeeping</li>
                                          <li>Personal tasks</li>
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
                  </div>
              </div>
          </div>

          <div className="testimonial-section">
              <div className="wishup-container">
                  <h2>
                      Unbelievable? Read to Believe
                  </h2>
                  <div className="red-strip"></div>
                  <div className="description">
                      <div className="mobile-bar"></div>
                      Virtual Employees are go-to for many thriving businesses and entrepreneurs across the globe. Don’t believe it? Read what people have to say
                  </div>
                  <div className="row slider">
                      <button className=" previous" onClick={this.previous}>
                          <img src={require('../../assets/previous-icon.png')} height="45px"/>
                      </button>
                      <button className=" next" onClick={this.next}>
                          <img src={require('../../assets/next-icon.png')} height="45px"/>
                      </button>
                      <Slider ref={c => (this.slider2 = c)} {...settings2}>
                          <div className="col-sm-4" key={1}>
                              <div className="card">
                                  I have been using the services of a Virtual assistant from Wishup for few months now and I must say they are professional, trustworthy and highly competent.
                              </div>
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
                          <div className="col-sm-4" key={2}>
                              <div className="card">
                                  We've had a great experience working with Upasana and WIshup. I can not recommend it enough for anyone looking for a talented freelancer to accelerate your growth.
                              </div>

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
                          <div className="col-sm-4" key={3}>
                              <div className="card">
                                  I have been using the services of Wishup for close to half a year now and I truly feel this is one of the best investments I have made.
                              </div>
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

                          <div className="col-sm-4" key={4}>
                              <div className="card">
                                  I couldn't be more thrilled with my Wishup VA! It took me a few weeks to get the time to organize the work to assign initially, but it's been the best business decision for me this year.
                              </div>
                              <div className="profile-pic" >
                                  <img src={require('../../assets/andrew.jpeg')} height="55px"/>
                              </div>
                              <div className="profile-info">

                              <span className="name">Andrew McDermott

                                    <a href="https://www.linkedin.com/in/andrewmcdermott/" target="_blank">
                                  <img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                  <span className="position"> Full-Time Traveler</span>,<span className="company-name"></span>
                              </div>
                          </div>

                          <div className="col-sm-4" key={5}>
                              <div className="card">
                                  First I was skeptical about the whole VA game. But when I started my trial at Wishup this completely changed. Now I can really feel the value (and power!) a VA can have.
                              </div>
                              <div className="profile-pic" >
                                  <img src={require('../../assets/neil.jpg')} height="55px"/>
                              </div>
                              <div className="profile-info">

                              <span className="name">Niels Van De Bergh

                                    <a href="https://www.linkedin.com/in/nielsvandenbergh/" target="_blank">
                                  <img src={require('../../assets/linkedin-button.svg')} height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                  <span className="position"> Growth Consultant</span>,<span className="company-name"></span>
                              </div>
                          </div>

                      </Slider>
                  </div>
                  <div className="row ">



                  </div>
              </div>
          </div>


          <div className="highlight-bar ">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-5">
                          <h2>
                              Skilled, multitasking experts? We call them our Virtual Employees
                          </h2>
                      </div>
                      <div className="col-sm-7">
                          <div className="mobile-bar"></div>
                          <div className="description">
                              At Wishup, we undertake a serious vetting process to find the most apt, multi-skilled workforce for our clients. Our Virtual Employees undergo numerous levels of evaluation ranging from communication skills, technical skills, multi-tasking ability and much more. Applications pour in from all over but we retain only 2-3% of them. We always find the best talent to work with.
                              <br></br>
                              <div className="button">
                                  Get Started
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="team-pic" style={{  backgroundImage: "url(" + require('../../assets/resources/team.png') + ")"}}>
          </div>


          <div className="pricing-bar">
              <div className="wishup-container">
                  <div className="heading">
                      Tailor-made Plans to suit every workload.
                  </div>
                  <div className="cta">
                      <div className="button">Get Started</div>
                  <div className="button">Plan and Pricing</div>
                  </div>
              </div>
          </div>

          <div className="highlight-bar second-highlight-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-5">
                          <h2>
                              Troubled with Recurrent Tasks? Let’s Automate it for you
                          </h2>
                      </div>
                      <div className="col-sm-7">
                          <div className="mobile-bar"></div>
                          <div className="description">
                              Enterprises require a great deal of time and focus to streamline their success.Our Virtual Employee helps you stay on track by managing appointments, inbox, social media, content creation and much more.
                              <br></br>
                              <div className="button">
                                  Get Started
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="mentions">
              <h2>
                  Wishup in media
              </h2>
              <div className="red-strip"></div>
              <div className="wishup-container">
                  <div className="row">
                      <a target="_blank" href="https://yourstory.com/2018/11/wishup-aims-help-mums-balance-careers-family-work-home-options/">
                      <div className="col-sm-4 left"><img src={require('../../assets/resources/yourstory.png')} height="25px"/> </div>
                      </a>
                      <a target="_blank" href="http://bwpeople.businessworld.in/article/GIG-economy-increase-in-contract-based-jobs/20-09-2018-160373/">
                      <div className="col-sm-4"><img src={require('../../assets/resources/business-world.png')} height="25px"/> </div>
                      </a>
                      <a target="_blank" href="https://economictimes.indiatimes.com/jobs/wishup-to-hire-400-people/articleshow/66421647.cms">
                      <div className="col-sm-4"><img src={require('../../assets/resources/economic-times.png')} height="25px"/> </div>
                      </a>
                      <a target="_blank" href="https://www.livemint.com/Leisure/JkinDpMBgPenrQBxWdeX6I/No-fixed-benefitsyet-gig-economy-rocks.html">
                      <div className="col-sm-4 left"><img src={require('../../assets/resources/livemint.png')} height="25px"/> </div>
                      </a>
                      <a target="_blank" href="https://www.moneycontrol.com/news/business/startup/how-wishup-is-bridging-gap-between-talented-individuals-and-corporates-looking-for-remote-employees-2872311.html">
                      <div className="col-sm-4"><img src={require('../../assets/resources/moneycontrol.png')} height="25px"/> </div>
                      </a>
                      <a href="https://epaper.telegraphindia.com/calcutta/2018-10-02/71/Page-15.html" target="_blank">
                      <div className="col-sm-4"><img src={require('../../assets/resources/telegraph.png')} height="25px"/> </div>
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



          <div className="va-bar">
              <div className="wishup-container">
                  <div><div className="va-bar-text">
                      <div className="va-text"> Become a Virtual Employee </div></div><div className="line"></div><a href="https://www.wishup.co/become-a-virtual-assistant"> <div className="hire-cta wishup">Get started</div></a></div>

              </div>
          </div>
      </div>
    );
  }
}

export default HomePage;
