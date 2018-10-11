import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Button from '../Button';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import CustomInput from '../CustomInput';
import { css } from 'aphrodite';
import data from "../../data/FAQ";
import {loop} from 'react-icons-kit/ionicons/loop';
import {flag} from 'react-icons-kit/fa';
import Icon from "react-icons-kit";

class PricingCard extends Component {
    renderCard(data){
            return (
                <div className={css(styles.card)}>
                    <div className={css(styles.cardUContainer)}>
                        <div className={css(styles.cardTopContainer)}>
                            <div className={css(styles.cardDiscount)}>
                                {data.discount && (
                                <span className={css(styles.cardDiscountText)}>
                                    {data.discount}
                                </span>
                                )}
                            </div>
                        </div>
                        <div className={css(styles.cardMainContainer)}>
                            <h3 className={css(styles.cardHeading)}>{data.title}</h3>
                            <p className={css(styles.cardSubHeading)}>{data.desc}</p>
                            <div className={css(styles.cardSpacing)}>
                            </div>
                            <div className={css(styles.cardPricing)}>
                                <span className={css(styles.cardCurrencySign)}>{data.currency}</span>
                                <span className={css(styles.cardPrice)}>{data.price}</span>
                                <span className={css(styles.cardTime)}>{data.priceTime}</span>
                            </div>
                            <div className={css(styles.cardSpacing)}>
                            </div>
                            <ul className={css(styles.cardInfo)}>
                                <li className={css(styles.cardInfoItem)}><span><strong>{data.time} Hours</strong> of Task Work</span></li>
                                <li className={css(styles.cardInfoItem)}><span><strong>{data.user} User</strong> Included</span></li>
                            </ul>
                            <div className={css(styles.cardButton)}>
                                <Button href={data.link} style={styles.buttonStyle} textStyle={styles.buttonText}>{data.buttonText}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }

    render(){
        //<Link to='/'>Home</Link>
        const customStyle = this.props.style;
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.uContainer)}>
                    <div className={css(styles.mainContainer)}>
                        <div className={css(styles.content)}>
                                {this.renderCard({title: "Entrepreneur Plan", desc: "Small task work to keep on top of a few things.", currency: '$', price: '398', priceTime: '/mo', time: '12', user: '1', buttonText: "Sign Up", link: ""})}
                                {this.renderCard({discount: '12% Discount', title: "Startup Plan", desc: "Project work that goes beyond inbox & scheduling.", currency: '$', price: '698', priceTime: '/mo', time: '24', user: '2', buttonText: "Sign Up", link: ""})}
                                {this.renderCard({discount: '16% Discount', title: "Small Business Plan", desc: "Part-time help just shy of a full time employee..", currency: '$', price: '998', priceTime: '/mo', time: '998', user: '3', buttonText: "Sign Up", link: ""})}
                                {this.renderCard({discount: '2 Bonus Users', title: "Team Plan", desc: "Part-time help just shy of a full time employee.", currency: '$', price: '1338', time: '50', user: '5', buttonText: "Sign Up", link: ""})}

                        </div>
                    </div>
                    <div className={css(styles.info)}>
                        <p className={css(styles.infoP)}><strong>Looking for something else?</strong> <a className={css(styles.linkA)} href="/request-a-consultation">Request a Consultation</a> to customize a plan.</p>
                    </div>
                    <div className={css(styles.promo)}>
                        <form className={css(styles.promoForm)}>
                            <div className={css(styles.promoLabel)}>
                                <label>Have a promo/access code? Enter&nbsp;it&nbsp;here</label>
                            </div>
                            <div className={css(styles.promoInputContainer)}>
                                <input className={css(styles.promoInput)} name="code" type="code" placeholder="PROMO-CODE"/>
                            </div>
                            <div className={css(styles.promoButtonContainer)}>
                                <Button href="/" style={styles.promoButtonStyle} textStyle={styles.promoButtonText}>Apply</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={css(styles.plansInclude)}>
                    <div className={css(styles.plansIncludeU)}>
                        <div className={css(styles.includeContainer)}>
                            <div>
                                <h2 className={css(styles.includeHeading)}>All Plans Include</h2>
                                <div className={css(styles.includePlansContainer)}>
                                    <div className={css(styles.includePlan)}>
                                        <h3><Icon size={20} icon={flag}/></h3>
                                        <p> <a className={css(styles.linkA)} href="/request-a-consultation">Dedicated US-based college-educated Virtual Assistant</a></p>
                                    </div>
                                    <div className={css(styles.includePlan)}>
                                        <h3></h3>
                                        <p>Available Monday-Friday 9am to 6pm (ET or PT)</p>
                                    </div>
                                    <div className={css(styles.includePlan)}>
                                        <h3></h3>
                                        <p>Direct contact via phone, SMS, and Email</p>
                                    </div>
                                    <div className={css(styles.includePlan)}>
                                        <h3></h3>
                                        <p>Delegation Kickstart Program</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingCard;
