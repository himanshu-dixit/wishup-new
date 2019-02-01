import React, { Component } from 'react';
import './testimonial.css';

class Testimonial extends Component {


  render(){

      function return_card(text, name,position,company,linkedin,image){
          return (   <div className="col-sm-4" key={1}>
              <div className="profile-desc mobile-only">

                  <div className="profile-pic">
                      <img src={image} height="55px"/>
                  </div>
                  <div className="profile-info">

                      <span className="name"> {name}</span>

                      <br></br>
                      <span className="position">{position}</span><span
                      className="company-name">{company}</span>
                  </div>
              </div>
              <div className="card">
                  {text}
              </div>
              <div className="profile-desc desktop-only">

                  <div className="profile-pic">
                      <img src={image} height="55px"/>
                  </div>
                  <div className="profile-info desktop-only">

                      <span className="name">{name}</span>

                      <br></br>
                      <span className="position">{position}</span><span
                      className="company-name">{company}</span>
                  </div>
              </div>
          </div>);
      }



      if(this.props.type){
          return (
              <div className="testimonial-section">
                  <div className="wishup-container">
                      <h2>
                          {this.props.type == "testiomonial_page"? "We take immense pride in all the clients that we’ve worked with so far. Here’s what industry leaders have to say about Wishup"
                              : "Unbelievable? Read to Believe." }

                      </h2>
                      <div className="red-strip"></div>
                      <div className="description">
                          <div className="mobile-bar"></div>
                          Virtual assistants are go-to for many thriving businesses and entrepreneurs across the globe. Don’t believe it? <a href="/testimonials"> Read what people have to say</a>
                      </div>
                      <div className="row ">

                          {return_card('Wishup has made me challenge my own boundaries and work on numerous client profiles. The process is smooth and certainly a lot that’s learned!',
                              'Upasana Iyer',
                              'VA',
                              '',
                              '',
                              '/static/assets/va/upasana.jpg')}
                          {return_card('My heartfelt thanks to Wishup, a platform that has given me immense opportunity to learn and grow, and above all maintain a perfect work-life balance',
                              'Shweta',
                              'VA',
                              '',
                              '',
                              '/static/assets/va/Shweta.jpeg')}
                          {return_card('Juggling between career and family was a struggle but Wishup has made it possible. Now I don\'t need to choose one over the other, as I can give both the importance they deserve.',
                              'Malika',
                              'VA',
                              '',
                              '',
                              '/static/assets/va/malika.jpg')}

                          <div className="col-md-2"></div>
                          {return_card('I enjoy my work as I get to interact with entrepreneurs, authors and top level executives. This is a perfect opportunity for me as I get to do what I like from the comfort my own home.',
                              'Swati',
                              'VA',
                              '',
                              '',
                              '/static/assets/va/swati.jpg')}

                          {return_card('                          A perfect opportunity for work-life balance! The scope of work is very wide and learning is endless. Perfect place to enhance and sharpen the skills.',
                              'Saloni',
                              'VA',
                              '',
                              '',
                              '/static/assets/va/saloni.jpg')}

                          <div className="col-md-2"></div>

                      </div>
                  </div>
              </div>
          );

      }
    //<Link to='/'>Home</Link>
    return (
        <div className="testimonial-section">
            <div className="wishup-container">
                <h2>
                    {this.props.type == "testiomonial_page"? "We take immense pride in all the clients that we’ve worked with so far. Here’s what industry leaders have to say about Wishup"
                       : "Unbelievable? Read to Believe." }

                </h2>
                <div className="red-strip"></div>
                <div className="description">
                    <div className="mobile-bar"></div>
                    Virtual assistants are go-to for many thriving businesses and entrepreneurs across the globe. Don’t believe it? <a href="/testimonials"> Read what people have to say</a>
                </div>
                <div className="row ">

                    <div className="col-sm-4" key={1}>
                        <div className="profile-desc mobile-only">
                            <div className="profile-pic">
                                <img src='/static/assets/pranay.jpeg' height="55px"/>
                            </div>
                            <div className="profile-info">

                                <span className="name"> Pranay Gupta</span>
                                <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                    <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                                </a>
                                <br></br>
                                <span className="position"> Co-Founder</span>,<span className="company-name"> 91Springboard</span>
                            </div>
                        </div>
                        <div className="card">
                            I have been using the services of a Virtual assistant from Wishup for few months now and I must say they are professional, trustworthy and highly competent.
                        </div>
                        <div className="profile-desc desktop-only">

                            <div className="profile-pic">
                                <img src='/static/assets/pranay.jpeg' height="55px"/>
                            </div>
                            <div className="profile-info desktop-only">

                                <span className="name"> Pranay Gupta</span>
                                <a href="https://www.linkedin.com/in/pranayg/" target="_blank">
                                    <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                                </a>
                                <br></br>
                                <span className="position"> Co-Founder</span>,<span className="company-name"> 91Springboard</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" key={2}>
                        <div className="profile-desc mobile-only">
                            <div className="profile-pic">
                                <img src='/static/assets/manan.jpeg' height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span ><br></br>
                                <span className="position"> Co-Founder</span>,<span className="company-name"> RecruiterFlow</span>
                            </div>
                        </div>
                        <div className="card">
                            We've had a great experience working with Upasana and Wishup. I can not recommend it enough for anyone looking for a talented freelancer to accelerate your growth.
                        </div>
                        <div className="profile-desc desktop-only">
                            <div className="profile-pic">
                                <img src='/static/assets/manan.jpeg' height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name"> Manan Shah
                               <a href="https://www.linkedin.com/in/mananshah212/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span ><br></br>
                                <span className="position"> Co-Founder</span>,<span className="company-name"> RecruiterFlow</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4" key={3}>
                        <div className="profile-desc mobile-only">
                            <div className="profile-pic" >
                                <img src='/static/assets/Farhan.jpg' height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
                              </a>
                              </span><br></br>
                                <span className="position"> Founder</span>,<span className="company-name"> Confetti Holdings</span>
                            </div>
                        </div>
                        <div className="card">
                            I have been using the services of Wishup for close to half a year now and I truly feel this is one of the best investments I have made.
                        </div>
                        <div className="profile-desc desktop-only">
                            <div className="profile-pic" >
                                <img src='/static/assets/Farhan.jpg' height="55px"/>
                            </div>
                            <div className="profile-info">

                              <span className="name">Farhan Ahmed

                                    <a href="https://www.linkedin.com/in/farhad-ahmed-240227144/" target="_blank">
                                  <img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>
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
                    {/*<img src='/static/assets/andrew.jpeg' height="55px"/>*/}
                    {/*</div>*/}
                    {/*<div className="profile-info">*/}

                    {/*<span className="name">Andrew McDermott*/}

                    {/*<a href="https://www.linkedin.com/in/andrewmcdermott/" target="_blank">*/}
                    {/*<img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>*/}
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
                    {/*<img src='/static/assets/neil.jpg' height="55px"/>*/}
                    {/*</div>*/}
                    {/*<div className="profile-info">*/}

                    {/*<span className="name">Niels Van De Bergh*/}

                    {/*<a href="https://www.linkedin.com/in/nielsvandenbergh/" target="_blank">*/}
                    {/*<img src='/static/assets/linkedin-button.svg' height="15px" className="linkedin"/>*/}
                    {/*</a>*/}
                    {/*</span><br></br>*/}
                    {/*<span className="position"> Growth Consultant</span>,<span className="company-name"></span>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default Testimonial;
