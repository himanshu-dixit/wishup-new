import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../components/GraphicHeader';

class FAQ extends Component {

    render() {
        return (
            <div className="faq">
                <GraphicHeader
                    title="FAQ"
                    description="We have more than 20."
                    image={"url(" + require('../../assets/resources/what-we-do/what-we-do-background[1].png') + ")"}
                ></GraphicHeader>
                <div className="raised-container-top raised-container">
                    <div className="wishup-container">
                        <div className="row">

                            <div className="col-sm-8">
                                <div className="section-text">
                                    <h4>Who are these assistants?</h4>
                                    Your assistants are smart & talented professionals. They are college - educated from the best colleges in India & are trained rigorously in-house for a month.
                                    <h4>Who are these assistants?</h4>
                                    Your assistants are smart & talented professionals. They are college - educated from the best colleges in India & are trained rigorously in-house for a month.
                                    <h4>When is my VA available?</h4>
                                    Your VAs are available Mon - Fri from 9 AM to 6 PM

                                    <h4>I need extra hours. What should I do?</h4>
                                    Please contact us at sales@wishup.in

                                    <h4>What tasks my VA cannot do?</h4>
                                    Running physical errands
                                    Content creation, creative & design work
                                    Outbound sales calls
                                    Legal, accounting & HR
                                    Full-time customer support
                                    Receptionist service


                                        <h4> Can the VA make payments on my behalf?</h4>
                                    Currently, they cannot. Although we are in the process of integrating this facility very soon.

                                        <h4>Can the VA make outbound calls for me?</h4>
                                    Absolutely. Your VA can contact vendors, make reservations, and place phone calls for you but they cannot make outbound sales calls.

                                        <h4> Will I be charged for phone calls VA makes on my behalf?</h4>
                                    Yes, the VA will send a detailed statement for these calls.

                                        <h4>Can VA receive inbound calls?</h4>
                                    Yes, but accessible only to you. Your VAs cannot receive calls from service providers, contacts, employees on your behalf.

                                        <h4> Can my VA edit a presentation for me?</h4>
                                    Your VA can format and edit ppts with your provided content, images and detailed design layout & instructions.

                                        <h4> Will my VA be working on holidays?</h4>
                                    Your VA will not be available on national holidays in India - (New Year's Eve, New Year's day, Diwali, Holi, Independence Day (US & India), Republic day, Labor Day, Thanksgiving, Christmas Eve, Christmas Day).

                                        <h4>What if my VA goes on vacation?</h4>
                                    Every VA is given 2 days of leaves in a month (24 leaves in a calendar year). If a VA takes more than 2 leaves, your subscription will be extended by those number of days. Needless to say, any leaves will be taken well in advance.

                                        <h4>I want to escalate a serious issue.</h4>
                                    Please write to us on contact@wishup.in

                                        <h4> I don't like my VA. I want a replacement.</h4>
                                    <div>
                                        Wishup cares about the security of your information and uses commercially reasonable physical, administrative, and technological safeguards to preserve the integrity and security of all information collected through our website. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that any information under our control is compromised as a result of a breach of security, Wishup will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations. In case of any privacy breach/client information leak by an assistant/employee, appropriate & strict legal action will be taken by Wishup on the concerned person(s). Wishup signs a contract NDA (non-disclosure agreement) with every employee & assistant. Breach of NDA by an employee through leakage of any client information will lead to strict civil & criminal legal actions being taken by such employees(s).
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-3-large">
                                <div className="faq-form">
                                    Sounds like the kind of team you want to work with?
                                    <div className="form-cta-button">Request consultation</div>
                                    <div className="form-cta-button">View Plans and Pricing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FAQ;
