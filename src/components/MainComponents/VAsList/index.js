import React, { Component } from 'react';
import './testimonial.css';
import Slider from "react-slick";
import getPricing from "../../../services/location";

class VAsList extends Component {
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
    //<Link to='/'>Home</Link>
    return (
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
                        <img src={require('../../../assets/previous-icon.png')} height="45px"/>
                    </button>
                    <button className=" next" onClick={this.next}>
                        <img src={require('../../../assets/next-icon.png')} height="45px"/>
                    </button>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="col-sm-3" key={1}>
                            <div className="card">
                                <div className="round-pic">
                                    <img src={require('../../../assets/va/upasana.jpg')} width="100%"/>
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
                                    <img src={require('../../../assets/resources/userr.png')} width="100%"/>
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
                                    <img src={require('../../../assets/va/swati.jpg')} width="100%"/>
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
                                    <img src={require('../../../assets/va/saloni.jpg')} width="100%"/>
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
                                    <img src={require('../../../assets/va/malika.jpg')} width="100%"/>
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

    );
  }
}

export default VAsList;
