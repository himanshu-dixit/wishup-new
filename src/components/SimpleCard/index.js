import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Button from '../Button';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import { css } from 'aphrodite';
import data from "../../data/FAQ";


class SimpleCard extends Component {
    renderButtons() {
        const data = (typeof this.props.buttons != "undefined") ? this.props.buttons : [];
        const buttons = data.map((button, index) => {
            return (
                <Button key={index} href={button.href} style={this.props.buttonStyle} textStyle={this.props.textStyle}>{button.text}</Button>
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
      <div className={css(customStyle.bgImage, styles.container)}>
          <div className={css(styles.mainContainer)}>
            <div className={css(styles.offContainer)}>
              <div className={css(styles.heading,  this.props.headingStyle)}>
                <h2 className={css(styles.mainHeading, this.props.mainheadingStyle)}>{this.props.heading}</h2>
                <h1 className={css(styles.subHeading)}>{this.props.subHeading}</h1>
                  {this.renderButtons()}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default SimpleCard;
