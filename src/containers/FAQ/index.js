import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';

class FAQ extends Component {

    render() {
        return (
            <div>
                <GraphicHeader
                    title="Plans & Pricing"
                    description="Flexible monthly plans to fit any workload"
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[1].png') + ")"}
                ></GraphicHeader>
            </div>
        );
    }
}

export default FAQ;
