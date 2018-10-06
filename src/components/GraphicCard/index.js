import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Button from '../Button';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import { css } from 'aphrodite';
import data from "../../data/FAQ";
import {search} from 'react-icons-kit/fa/search'
import Icon from "react-icons-kit";


class GraphicCard extends Component {
    renderButtons() {
        const data = (typeof this.props.buttons != "undefined") ? this.props.buttons : [];
        const buttons = data.map((button, index) => {
            return (
                <Button href={button.href} style={this.props.buttonStyle} textStyle={this.props.textStyle}>{button.text}</Button>
            );
        });
        return (
            <div>{buttons}</div>
        );
    }
    render(){
        //<Link to='/'>Home</Link>
        const customStyle = this.props.style;
        return (
            <div className={css(styles.container, this.props.background)}>
                <div className={css(styles.uContainer)}>
                    <div className={css(styles.mainContainer)}>
                        <div className={css(styles.content)}>
                            <div><h2 className={css(styles.heading)}>Plans starting at just $398/mo.</h2></div>
                            <div className={css(styles.buttonsContainer)}>
                                <Button href="/" style={this.props.buttonStyle} textStyle={this.props.textStyle}>Request a Consultation</Button>
                                <Button href="/" style={this.props.buttonStyle} textStyle={this.props.textStyle}>View Plans & Pricing</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GraphicCard;
