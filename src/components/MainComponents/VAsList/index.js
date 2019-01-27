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

        if(this.props.type == "become-va"){

            return (
                <div className="va-section">
                    <div className="wishup-container">
                        <h2>
                            Meet Some Of our Virtual assistants
                        </h2>

                        <div className="description">
                            <div className="mobile-bar"></div>
                            Working with a Virtual Assistant is easier than ever before. Request a consultation, connect with our client support team, list out your requirements, find your VE, connect and start delegating almost immediately
                        </div>
                        <div className="row slider">
                            <button className=" previous" onClick={this.previous}>
                                <img src='/static/assets/previous-icon.png' height="45px"/>
                            </button>
                            <button className=" next" onClick={this.next}>
                                <img src='/static/assets/next-icon.png' height="45px"/>
                            </button>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                                <div className="col-sm-3" key={1}>
                                    <div className="card">
                                        <div className="round-pic">
                                            <img src='/static/assets/va/upasana.jpg' width="100%"/>
                                        </div>
                                        <div className="user-name">
                                            Upasana Iyer
                                        </div>
                                        <div className="user-desc">
                                            “Wishup has been an amazing journey where I have challenged my own boundaries and work on numerous client profiles. The process is smooth and certainly a lot that’s learned!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" key={2}>
                                    <div className="card">
                                        <div className="round-pic">
                                            <img src='/static/assets/va/Shweta.jpeg' width="100%"/>
                                        </div>
                                        <div className="user-name">
                                            Shweta
                                        </div>
                                        <div className="user-desc">
                                            First of all, my heartfelt thanks to Wishup, a platform that has given me immense opportunity to learn and grow, and above all maintain a perfect balance in my personal and professional life. There is a strong support system and a lot to learn, it has added immense joy to my life.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" key={3}>
                                    <div className="card">
                                        <div className="round-pic">
                                            <img src='/static/assets/va/swati.jpg' width="100%"/>
                                        </div>
                                        <div className="user-name">
                                            Swati
                                        </div>
                                        <div className="user-desc">
                                            I have been working with Wishup from past 1 year. I enjoy my work, as I get to interact with Entrepreneurs, CEOs, Authors  and top level executives. I feel this is a perfect opportunity for me as I get to do the job I like at the comfort my own home.
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-3" key={4}>
                                    <div className="card">
                                        <div className="round-pic">
                                            <img src='/static/assets/va/saloni.jpg' width="100%"/>
                                        </div>
                                        <div className="user-name">
                                            Saloni
                                        </div>
                                        <div className="user-desc">
                                            A perfect opportunity for Work life balance- that's what Wishup gives you. The scope of work is very wide and learning is endless. Perfect place to enhance and sharpen the skills
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" key={5}>
                                    <div className="card">
                                        <div className="round-pic">
                                            <img src='/static/assets/va/malika.jpg' width="100%"/>
                                        </div>
                                        <div className="user-name">
                                            Mallika
                                        </div>
                                        <div className="user-desc">
                                            Juggling a career and family was a struggle but Wishup has made it possible for me to achieve this. Now I don't need to choose one over the other, as I can give both the importance they deserve. I can even follow my passions of writing and photography. What more can one ask for?
                                          </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

            );

        }
    return (
        <div className="va-section">
            <div className="wishup-container">
                <h2>
                    Meet Some Of our Virtual assistants
                </h2>

                <div className="description">
                    <div className="mobile-bar"></div>
                    Working with a Virtual Assistant is easier than ever before. Request a consultation, connect with our client support team, list out your requirements, find your VE, connect and start delegating almost immediately
                </div>
                <div className="row slider">
                    <button className=" previous" onClick={this.previous}>
                        <img src='/static/assets/previous-icon.png' height="45px"/>
                    </button>
                    <button className=" next" onClick={this.next}>
                        <img src='/static/assets/next-icon.png' height="45px"/>
                    </button>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="col-sm-3" key={1}>
                            <div className="card">
                                <div className="round-pic">
                                    <img src='/static/assets/va/upasana.jpg' width="100%"/>
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
                                    <img src='/static/assets/va/Shweta.jpeg' width="100%"/>
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
                                    <img src='/static/assets/va/swati.jpg' width="100%"/>
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
                                    <img src='/static/assets/va/saloni.jpg' width="100%"/>
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
                                    <img src='/static/assets/va/malika.jpg' width="100%"/>
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
