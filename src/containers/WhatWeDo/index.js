import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';

class WhatWeDo extends Component {

    render() {
        return (
            <div className="what-we-do">
                <GraphicHeader
                    title="What We Do"
                    description=""
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[1].png') + ")"}
                ></GraphicHeader>
                <div className="raised-container-top raised-container">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="what-we-do-menu">
                                    <div className="menu-header">
                                        What We Do
                                    </div>
                                    <div className="menu-list">
                                        <div className="menu-item active">
                                            Adminstrative Task
                                        </div>
                                        <div className="menu-item">
                                            Adminstrative Task
                                        </div>
                                        <div className="menu-item">
                                            Adminstrative Task
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="section-text">
                                    Zirtual provides US-Based, college educated virtual assistants to busy people everywhere, but just what is a virtual assistant, and how does the role compare to traditional “in office” titles?

                                    There are many titles that provide the same functions, and there are some titles that focus on more specialized or specific needs. When you see titles such as Admin Assistant, Professional Assistant, Virtual Administrative Assistant, Online Administrative Assistant, Virtual Office Assistant and Remote Assistant, they are all just different names for the same role.

                                    However, titles such as Remote Office Manager, Virtual Secretary, Virtual Paralegal, Virtual Receptionist, and Online Project Manager, usually indicate much more specific and specialized areas of expertise and service.
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-3-large">
                                <div className="what-we-do-form">
                                    Sounds like the kind of team you want to work with?
                                    <div className="form-cta-button">Request consultation</div>
                                    <div className="form-cta-button">View Plans and Pricing</div>
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
                                    <h2>How are they different?</h2>
                                    <div className="section-text">
                                        <h4>For One. For All</h4>

                                        Whether you’re a big business or small, we understand different one-time and ongoing administrative needs. We’re ready to get started on your tasks as soon as you are ready to delegate your boring, mundane tasks to us!

                                        <h4>Amazing team</h4>

                                        The secret ingredient to our magic is our team of awesome, efficient, multi-taskers. Apart from being technically skilled, we understand organizational skills like no other. Our team of Virtual Employees is committed, professional and do not need to be micromanaged.

                                        <h4>Value Addition</h4>

                                        Our team of Virtual Employee understands the administrative needs of each client and adapts to each of these needs. We are always on the lookout to add the happiness quotient to your life, whether it is by helping you book a nice family vacation or by micro-managing all your daily office tasks.
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>
                    </div>
                </div>
                <GraphicHeader
                    title="Area of Specilization"
                    description=""
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[2].png') + ")"}
                ></GraphicHeader>
                <div className="raised-container">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-6">
                                <div className="different-section">
                                    <h2>How are they different?</h2>
                                    <div className="section-text">
                                        <h4>For One. For All</h4>

                                        Whether you’re a big business or small, we understand different one-time and ongoing administrative needs. We’re ready to get started on your tasks as soon as you are ready to delegate your boring, mundane tasks to us!

                                        <h4>Amazing team</h4>

                                        The secret ingredient to our magic is our team of awesome, efficient, multi-taskers. Apart from being technically skilled, we understand organizational skills like no other. Our team of Virtual Employees is committed, professional and do not need to be micromanaged.

                                        <h4>Value Addition</h4>

                                        Our team of Virtual Employee understands the administrative needs of each client and adapts to each of these needs. We are always on the lookout to add the happiness quotient to your life, whether it is by helping you book a nice family vacation or by micro-managing all your daily office tasks.
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                            </div>
                        </div>
                    </div>
                </div>
                <GraphicHeader
                    title="Area of Specilization"
                    description=""
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[2].png') + ")"}
                ></GraphicHeader>
                <div className="raised-container">
                    <div className="wishup-container">
                        <div className="row">
                            <div className="col-sm-3">
                            </div>
                            <div className="col-sm-6">
                                <div className="different-section">
                                    <h2>How are they different?</h2>
                                    <div className="section-text">
                                        <h4>For One. For All</h4>

                                        Whether you’re a big business or small, we understand different one-time and ongoing administrative needs. We’re ready to get started on your tasks as soon as you are ready to delegate your boring, mundane tasks to us!

                                        <h4>Amazing team</h4>

                                        The secret ingredient to our magic is our team of awesome, efficient, multi-taskers. Apart from being technically skilled, we understand organizational skills like no other. Our team of Virtual Employees is committed, professional and do not need to be micromanaged.

                                        <h4>Value Addition</h4>

                                        Our team of Virtual Employee understands the administrative needs of each client and adapts to each of these needs. We are always on the lookout to add the happiness quotient to your life, whether it is by helping you book a nice family vacation or by micro-managing all your daily office tasks.
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
