import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";
import Form from "../../components/Form";
import getPricing from "../../services/location";
import MetaTags from 'react-meta-tags';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = { width: 0, height: 0, price: getPricing() };
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
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: true
      };
    return (
      <div>
          <MetaTags>
              <title>Best Virtual Assistant Services Online, Hire a Virtual Assistant</title>
              <meta name="description" content="Looking for the best virtual assistant services online? Welcome to Wishup.co. Our dedicated team of Virtual (remote) assistants understand your need and takes care of your priorities. Hire a virtual assistant today! Services available for USA, UK, Canada, India and more."/>
              <meta property="og:title" content="Best Virtual Assistant Services Online, Hire a Virtual Assistant"/>
              <meta property="og:description" content="Looking for the best virtual assistant services online? Welcome to Wishup.co. Our dedicated team of Virtual (remote) assistants understand your need and takes care of your priorities. Hire a virtual assistant today! Services available for USA, UK, Canada, India and more."/>
              <link rel="canonical" href="http://www.wishup.co" />
          </MetaTags>

          {this.props.type == "new" ?
              <div className="new-cover"
                   style={{backgroundImage: "url(" + require('../../assets/blue-background.png') + ")"}}>
                  <div className="wishup-container">
                      <div className="container-fluid">
                          <div className="row">

                              <div className="col-md-7">
                          <div className="cover-info">
                              <h1 className="wishup-tagline">Get Work Done.<br></br> Remotely.</h1>
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
              :
              <div className="cover"
                   style={{backgroundImage: "url(" + require('../../assets/resources/cover.png') + ")"}}>
                  <div className="wishup-container">
                      <div className="container-fluid">
                          <div className="cover-info">
                              <h1 className="wishup-tagline">Get Work Done.<br></br> Remotely.</h1>
                              <div className="wishup-desc">Virtual Employees for Entrepreneurs,<br></br>
                                  Small Teams and Businesses.
                              </div>
                              <div className="hire-cta" onClick={() => {
                                  this.props.set("login")
                              }}>Get started
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          }


          <div className="grow-business-bar">
              <div className="wishup-container">
                  <div className="row">
                      <div className="col-sm-6 center desktop-only">
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
                      Unbelievable? Read to Believe
                  </h2>
                  <div className="red-strip"></div>
                  <div className="description">
                      <div className="mobile-bar"></div>
                      Virtual Employees are go-to for many thriving businesses and entrepreneurs across the globe. Don’t believe it? <a href="/testimonial"> Read what people have to say</a>
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
              </div>
          </div>


          <div className="super-highlight-bar">
              <div className="row">
                  <div className="col-sm-5 super-highlight-box">
                  </div>
                  <div className="col-sm-7 green-highlight-box">
                      <div className="wishup-container">
                      <h2>
                          Ready. Set. Go
                          Start Immediately with our Trained Employees
                      </h2>
                      <div className="highlight-description">
                          Working with a Virtual Employee is easier than ever before. Request a consultation, connect with our client support team, list out your requirements, find your VE, connect and start delegating almost immediately!
                      </div>
                          <a href="/">
                              <div className="button">Get Started</div>
                          </a>

                      </div>
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
                              At Wishup, we undertake a serious vetting process to find the most apt, multi-skilled workforce for our clients. Our Virtual Employees undergo numerous levels of evaluation ranging from communication skills, technical skills, multi-tasking ability and much more. Applications pour in from all over but we hire only 2-3% of them. We always find the best talent to work with.
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
                      Tailor-made plans to suit every workload.
                  </div>
                  <div className="description">
                      Starting at <sup>{this.state.price.image?<img src={this.state.price.whitesign} height="10px"/>:this.state.price.sign}</sup>{this.state.price.mini}/month
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

          <div className="second-highlight-bar">

                  <div className="row">
                      <div className="col-sm-5 super-highlight-box mobile-only">

                      </div>
                      <div className="col-sm-7">
                          <div className="wishup-container">
                          <h2>
                              Troubled with Recurrent Tasks? Let’s Automate it for you
                          </h2>
                          <div className="mobile-bar"></div>
                          <div className="description">
                              At Wishup, we undertake a serious vetting process to find the most apt, multi-skilled workforce for our clients. Our Virtual Employees undergo numerous levels of evaluation ranging from communication skills, technical skills, multi-tasking ability and much more. Applications pour in from all over but we hire only 2-3% of them. We always find the best talent to work with.

                          </div>
                          </div>
                      </div>
                      <div className="col-sm-5 super-highlight-box desktop-only">
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
                                  <div className="round-pic">
                                      <img src={require('../../assets/va/upasana.jpg')} width="100%"/>
                                  </div>
                                  <div className="user-name">
                                      Upasana Iyer
                                  </div>
                                  <div className="user-desc">
                                      Social science post graduate with 10+ yrs of writing/translating experience. Proficient with social media management, content creation, secondary research and more.
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-3" key={2}>
                              <div className="card">
                                  <div className="round-pic">
                                      <img src={require('../../assets/resources/userr.png')} width="100%"/>
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
                                  <div className="round-pic">
                                      <img src={require('../../assets/va/swati.jpg')} width="100%"/>
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
                                  <div className="round-pic">
                                      <img src={require('../../assets/va/saloni.jpg')} width="100%"/>
                                  </div>
                                  <div className="user-name">
                                      Saloni
                                  </div>
                                  <div className="user-desc">
                                      MBA Finance graduate with work experience as a wealth manager in a private sector bank. Proficient with Accounting and Gross Analysis, Email drafting, Recruitment, Management.
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-3" key={5}>
                              <div className="card">
                                  <div className="round-pic">
                                      <img src={require('../../assets/va/malika.jpg')} width="100%"/>
                                  </div>
                                  <div className="user-name">
                                      Mallika
                                  </div>
                                  <div className="user-desc">
                                      Vast experience in the aviation industry and global customer service. Proficient with social media, content generation, schedule management and more.
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
