import React, { Component } from 'react';
import './style.css';
import {sendRequest} from "../../services/server";
import MetaTags from "react-meta-tags";
import GraphicHeader from "../../components/GraphicHeader";


class Testimonial extends Component {

    render() {

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
            </div>
        );
    }
}

export default Testimonial;
