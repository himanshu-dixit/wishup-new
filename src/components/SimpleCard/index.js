import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import { css } from 'aphrodite';


class SimpleCard extends Component {
  toggle = () => {

  }
  render(){
    //<Link to='/'>Home</Link>
    return (
      <div className={css(this.props.style, styles.container)}>
          <div className={css(styles.mainContainer)}>
            <div className={css(styles.offContainer)}>
              <div className={css(styles.heading)}>
                <h1 className={css(styles.h1)}>Questions &amp;&nbsp;Answers</h1>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default SimpleCard;
