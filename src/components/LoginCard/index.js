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
import Icon from "react-icons-kit";

class LoginCard extends Component {
    renderLinks(){
        const links = [{icon: loop, text: "Reset your Password"}];
        const out = links.map((link, index) => {
            return (      <div className={css(styles.link)} key={index}>
                <div className={css(styles.linkIcon)}>
                                                            <span className={css(styles.iconSpan)}>
                                                                <Icon size={20} className={css(styles.iconSpan)} icon={link.icon}/>
                                                            </span>
                </div>
                <div className={css(styles.linkText)}>
                    <p className={css(styles.p)}>
                        <a className={css(styles.linkA)}>
                            {link.text}
                        </a>
                    </p>
                </div>
            </div>);
        });
        return (<div>{out}</div>);
    }

    render(){
        //<Link to='/'>Home</Link>
        const customStyle = this.props.style;
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.uContainer)}>
                    <div className={css(styles.mainContainer)}>
                        <div className={css(styles.content)}>
                            <div className={css(styles.inputContainer)}>
                                <form>
                                    <h2 className={css(styles.heading)}>
                                        Please Login
                                    </h2>
                                    <hr/>
                                    <CustomInput label="Email Address" type="email" id="email"/>
                                    <CustomInput label="Password" type="password" id="password"/>
                                    <div className={css(styles.buttonsContainer)}>
                                        <div className={css(styles.spacingDiv)}></div>
                                        <Button href="/" style={styles.buttonStyle} textStyle={styles.buttonText}>Continue</Button>
                                    </div>
                                </form>
                            </div>
                            <div className={css(styles.navContainer)}>
                                <div>
                                    <h2 className={css(styles.heading)}>
                                        Need help?
                                    </h2>
                                    <hr/>
                                    <div>
                                        {this.renderLinks()}
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

export default LoginCard;
