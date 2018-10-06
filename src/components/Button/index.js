import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import { css } from 'aphrodite';


class Button extends Component {

    render(){
        //<Link to='/'>Home</Link>
        return (
            <a href={this.props.href} className={css(styles.button, this.props.style)}>
                <span className={css(styles.buttonText, this.props.textStyle)}><span>{ this.props.children }</span></span>
            </a>
        );
    }
}

export default Button;
