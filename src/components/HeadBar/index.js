import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import { css } from 'aphrodite';


class HeadBar extends Component {
  toggle = () => {

  }
  render(){
    //<Link to='/'>Home</Link>
    return (
      <div className={["", css(styles.headBar, styles.fadeDown)].join(' ')}>
        <div className={css(styles.container)}>
          <div className={css(styles.row, styles.main)}>
            <div className={css(styles.toggleContainer)}>
              <a className={css(styles.col)}>
                the <strong className={css(styles.boldText)}>startups.co</strong> platform
                <Icon size={12} className={css(styles.vIcon)} icon={chevronDown}/>
              </a>
            </div>
            <div>
              <a className={css(styles.aPad)} href='/'>Announcing Bizplan: A Modern Take on Business Planning</a>
              <a className={css(styles.aPad)} >|</a>
              <a className={css(styles.aPad)} href="/">about startups.co</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadBar;
