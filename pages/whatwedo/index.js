import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../src/components/GraphicHeader';
import data from './data'
import {withRouter} from 'next/router'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MetaTags from "react-meta-tags";
import Head from "next/head";
import HeadBar from "../../src/components/HeadBar";
import Footer from "../../src/components/Footer";

class WhatWeDo extends Component {


    static getInitialProps({query}) {
        this.query = {query};
        console.log(query.name);
        return {query};
    }

    constructor(props){
        super(props);
        console.log(this.props.query);
        this.type = this.props.query.name;
        // console.log(this.type);
        // this.type = 'home';
        if(!this.type){
            this.type = 'home';
        }
        this.type = this.type.replace('undefined-','');
        this.type = this.type.replace('hire-','');
        this.type = this.type.replace('-assistant','');
        this.data = data;
    }

    selectPlan(plan){
        localStorage.setItem('plan',plan);
        window.location.replace("/");
    }



    render() {
        let that = this;


        return (
            <div className="what-we-do">
                <Head>
                    <title>Wishup</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                          crossOrigin="anonymous"></link>
                    <link rel="stylesheet" type="text/css" charset="UTF-8"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"></link>
                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                            crossOrigin="anonymous"></script>
                </Head>
                <HeadBar/>


                <GraphicHeader
                    title={this.data[this.type].title}
                    description={this.data[this.type].description}
                    image='url("/static/assets/resources/what-we-do/what-we-do-background[1].png")'
                />
                <div className="raised-container-top raised-container">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="what-we-do-menu-containerr">
                                    <div className="what-we-do-menu">
                                        <div className="menu-header">
                                            What We Do
                                        </div>
                                        <div className="menu-list">
                                            {Object.keys(that.data).map(function (key, index) {
                                                if (key !== "home") {
                                                    return <a href={"./hire-" + key+"-assistant"}>
                                                        <div
                                                            className={that.type === key ? "menu-item active" : "menu-item"}>
                                                            {that.data[key].title}
                                                        </div>
                                                    </a>
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="section-text">
                                    {ReactHtmlParser(this.data[this.type].content)}
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-3-large">
                                <div className="what-we-do-form">
                                    Sounds like the kind of team you want to work with?
                                    <a href="/"> <div className="form-cta-button">Request consultation</div></a>
                                    <a href="/virtual-assistant-pricing/"> <div className="form-cta-button">View Plans and Pricing</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grey-section">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-6">
                                <div className="different-section">
                                    <h2>{this.data[this.type].first_section.title}</h2>
                                    <div className="section-text">
                                        {ReactHtmlParser(this.data[this.type].first_section.content)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>
                    </div>
                </div>
                <GraphicHeader
                    title={this.data[this.type].second_section.title}
                    description=""
                    type="small"
                    image='url("/static/assets/resources/what-we-do/what-we-do-background[2].png")'
                />
                <div className="raised-container">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-6">
                                <div className="different-section">
                                    <div className="section-text">
                                        {ReactHtmlParser(this.data[this.type].second_section.content)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>
                    </div>
                </div>
                <GraphicHeader
                    title={this.data[this.type].third_section.title}
                    description=""
                    type="small"
                    image='url("/static/assets/resources/what-we-do/what-we-do-background[2].png")'
                />
                <div className="raised-container">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-6">
                                <div className="different-section">
                                    <div className="section-text">
                                        {ReactHtmlParser(this.data[this.type].third_section.content)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default WhatWeDo;
