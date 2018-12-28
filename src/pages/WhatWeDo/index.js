import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';
import data from './data'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MetaTags from "react-meta-tags";

class WhatWeDo extends Component {

    constructor(props){
        super(props);
        this.type = props.match.params.type;

        if(!this.type){
            this.type = 'home';
        }
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
                <MetaTags>
                    <title>{this.data[this.type].meta_title}</title>
                    <meta name="description" content={this.data[this.type].meta_description}/>
                    <meta property="og:title" content={this.data[this.type].og_title}/>
                    <meta property="og:description" content={this.data[this.type].og_description}/>
                    <link rel="canonical" href={"/hire-"+this.data+"-assistant"} />
                </MetaTags>

                <GraphicHeader
                    title={this.data[this.type].title}
                    description={this.data[this.type].description}

                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[1].png') + ")"}
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
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[2].png') + ")"}
                ></GraphicHeader>
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
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[2].png') + ")"}
                ></GraphicHeader>
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

            </div>
        );
    }
}

export default WhatWeDo;
