import React, { Component } from 'react';
import './style.css';
import GraphicHeader from '../../src/components/GraphicHeader';
import {getTiming} from "../../src/services/location"
import Head from "next/head";
import HeadBar from "../../src/components/HeadBar";
import Footer from "../../src/components/Footer";

class FAQ extends Component {

    render() {
        return (

            <div className="faq">
                <HeadBar/>
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

                <GraphicHeader
                    title="FAQ"
                    description=""
                    image='url("/static/assets/resources/why-wishup/header.png")'
                ></GraphicHeader>
                <div className="raised-container-top raised-container">
                    <div className="wishup-container">
                        <div className="row">

                            <div className="col-sm-8">
                                <div className="section-text">
                                    <h4> Who are these employees?</h4>

                                    Your employees are smart & experienced professionals. They are qualified and rigorously trained in-house for a month on 50+ business and executive related tasks.


                                    <h4>2.  When is my VE available?</h4>

                                    Your VAs are available {getTiming()}


                                    <h4>3.  What is Dedicated Assistance?</h4>

                                    Each of our plans include a dedicated virtual assistant (VA). You will work with your VA on a one-to-one basis, continually submitting tasks directly to this person. Your VA will grow to know you, your work, and your preferences—all while learning to anticipate your needs without you having to repeat yourself.

                                    As a collaborative consumption business, our VAs are a shared resource among clients. They schedule their days to best serve you and your incoming tasks with priority and without delay. As such, we do not offer immediate turnaround, though we expect most tasking to be completed in 24-48 hours. We encourage you to place priority levels and deadlines on your projects.


                                    <h4>4. I just signed up! What can I expect next?</h4>

                                    First, welcome aboard! We will begin locating the best possible VA for you using the information you shared during the signup process about your working style and personal preferences. After we’ve determined who would be the best fit for your needs—we’ll send an email connecting the two of you! We suggest hopping on a quick call soon after. We aim to introduce you to your VA within two business days of signing up.


                                    <h4> 5. Do my hours roll over?</h4>

                                    As a monthly membership service, our clients subscribe to us for the ability to retain a virtual assistant. While each plan offers a different level of service, as a membership subscription our plan hours do not rollover.



                                    <h4> 6. Can I share tasks on the weekend with my VE?</h4>

                                    You can submit your tasks anytime, day or night, weekday or weekend. If submitted before/after business hours, your VA will receive the task(s) the following business day to begin working on them. Kindly take note that if you send a task minutes before the workday ends, it is unlikely to be completed that same day.


                                    <h4>7. I need extra hours. What should I do?</h4>

                                    Please contact us at ops@wishup.co


                                    <h4> 8. What tasks my VE cannot do?</h4>

                                    Running physical errands

                                    Outbound sales calls

                                    Legal, accounting & HR

                                    Full-time customer support

                                    Receptionist service

                                    Payments on behalf of clients


                                    <h4> 9. Can the VE make payments on my behalf?</h4>

                                    Currently, they cannot. Although we are in the process of integrating this facility very soon.


                                    <h4>10. Can the VE make outbound calls for me?</h4>

                                    Absolutely but with some limitations.  Your VE can contact vendors, make reservations, and place phone calls for you but they cannot make outbound sales calls or solicit prospects.


                                    <h4>11. Will I be charged for phone calls VE makes on my behalf?</h4>

                                    Yes, the VA will send a detailed statement for these calls.


                                    <h4>12. Can VE receive inbound calls?</h4>

                                    Yes, but accessible only to you and the number of users limited to the package you’ve subscribed for. Your VAs cannot receive calls from service providers, contacts, employees on your behalf.


                                    <h4>13.Can my VE manage my inbox?</h4>

                                    Sure they can! Our VE’s are thoroughly trained in inbox management and can keep your inbox, organized and easy to access always.


                                    <h4>14. Can my VA handle scheduling?</h4>
                                    Absolutely. Our VEs exclusively use and manage Google Calendars.
                                    Your VE can coordinate meetings, schedule appointments, and manage your Google Calendar with ease. Simply share and grant your VE access to manage your calendar.

                                    <h4> 15.  Can my VE edit a presentation for me?</h4>
                                    Your VA can format and edit ppts with your provided content, images and detailed design layout & instructions.


                                    <h4>16. Will my VE be working on holidays?</h4>

                                    Wishup observes all national holidays in India. Your VE will not be available on New Year's Eve, New Year's day, Diwali, Holi, Independence Day (US & India), Republic day, Labor Day, Thanksgiving, Christmas Eve, Christmas Day(US only)


                                    <h4> 17. What if my VE goes on vacation?</h4>

                                    Every VE is entitled to 2 days of leaves in a month (24 leaves in a calendar year). If a VE takes more than 2 leaves, your subscription will be extended by those number of days. Needless to say, any leave taken will be informed to you.


                                    <h4>18. I want to escalate a serious issue.</h4>

                                    If you wish to escalate a serious issue about any of our VE, please get in touch with the respective Account Manager assigned to you.


                                    <h4>18. Is my company or personal information protected with Wishup?</h4>

                                    Wishup cares about the security of your information and uses commercially reasonable physical, administrative, and technological safeguards to preserve the integrity and security of all information collected through our website. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event of a breach of security, Wishup will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose information may have been compromised and take other steps, in accordance with any applicable laws and regulations. In case of any privacy breach/client information leak by an employee, appropriate & strict legal action will be taken by Wishup on the concerned person(s). Wishup signs a contract NDA (non-disclosure agreement) with every employee. Breach of NDA by an employee through leakage of any client information will lead to strict civil & criminal legal actions being taken by such employees(s).


                                    <h4>19. I don't like my VE. I want a replacement.</h4>

                                    Contact the Account Manager assigned to you and convey the same. We shall investigate quickly and make the transition to your next VE smooth.


                                    <h4> 20. Can I become a VE?</h4>

                                    We’re forever looking for zestful people. Please go to our ‘How to Become a VE’ page and fill the form with relevant details. If it enthuses us, we will get in touch with you shortly!


                                    <h4> 21. For how many hours will my VE work for me?</h4>

                                    Your daily bandwidth depends on the package that you subscribe for. Please refer to our Plans and Pricing Page to find out more.


                                    <h4>  22. How many users can delegate tasks to one VE that I have subscribed for?</h4>

                                    This depends on the package that you have subscribed for. Please refer to our Plans and Pricing Page to find out more.


                                    <h4> 23. Can I cancel anytime?</h4>

                                    Of course. Contact your Account Manager prior to your next billing cycle and we'll take care of your request. If you have already been billed, your cancellation request will not take effect until the following month. Unfortunately, we do not offer prorated refunds or cancellations for unused time.

                                    <br></br><br></br>Still Have a Question? Ask us Directly<br></br> <br></br>


                                    <strong>Sales and Enquiries-</strong><a href="mailto:sales@wishup.co"> sales@wishup.co</a><br></br>
                                    <strong>Careers-</strong><a href="mailto:sales@wishup.co">apply@wishup.co</a>



                                    <div>
                                   </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-3-large">
                                <div className="faq-form">
                                    Sounds like the kind of team you want to work with?
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
                        </div>
                    </div>
                </div>
<Footer/>
            </div>
        );
    }
}

export default FAQ;
