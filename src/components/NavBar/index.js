import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Button from '../Button';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import { css } from 'aphrodite';


class NavBar extends Component {
    toggle = () => {

    }
    render(){
        //<Link to='/'>Home</Link>
        return (<div>
            <div className={["", css(styles.bar, styles.transparent)].join(' ')}>
                <div className={css(styles.container)}>
                    <div className={css(styles.row, styles.main)}>
                        <div className={css(styles.pageLinks)}>
                            <div className={css(styles.linkContainer)}>
                            <a href="/" className={css(styles.pageLink)}>What We Do</a>
                            </div>
                            <div className={css(styles.linkContainer)}>
                            <a href="/" className={css(styles.pageLink)}>Why Zirtual?</a>
                            </div>
                            <div className={css(styles.linkContainer)}>
                                <Link to="/plans-pricing" className={css(styles.pageLink)}>Pricing</Link>
                            </div>
                            <div className={css(styles.linkContainer)}>
                            <Link to="/faqs" className={css(styles.pageLink)}>FAQs</Link>
                            </div>
                        </div>
                        <a className={css(styles.logo)}>
                            <svg style={{height: '2em'}} viewBox="0 0 78 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.874v-.054c0-.348.134-.616.43-.938L9.196 7.587H1.1c-.483 0-.886-.375-.886-.858 0-.484.403-.887.885-.887h9.89c.564 0 .993.376.993.83v.055c0 .348-.134.616-.43.937L2.79 17.962h8.445c.483 0 .885.403.885.858 0 .483-.402.885-.885.885H.993c-.537 0-.993-.375-.993-.83zM15.71 1.5c0-.67.537-1.098 1.207-1.098.697 0 1.233.43 1.233 1.1v.348c0 .643-.536 1.1-1.233 1.1-.67 0-1.206-.457-1.206-1.1V1.5zm.188 5.256c0-.563.456-1.046 1.02-1.046.59 0 1.045.456 1.045 1.046v12.038c0 .59-.43 1.045-1.02 1.045-.59 0-1.045-.458-1.045-1.047V6.756zm6.327 0c0-.563.456-1.046 1.02-1.046.59 0 1.044.456 1.044 1.046v2.6c1.017-2.305 3.03-3.7 4.77-3.7.617 0 1.02.456 1.02 1.046 0 .563-.376.965-.91 1.046-2.683.322-4.88 2.332-4.88 6.327v4.72c0 .562-.43 1.044-1.02 1.044-.59 0-1.046-.458-1.046-1.047V6.756zm12.118 9.276V7.667h-1.126c-.482 0-.91-.43-.91-.91 0-.51.428-.913.91-.913h1.126v-3.27c0-.563.43-1.046 1.02-1.046.562 0 1.044.483 1.044 1.046v3.27H40c.51 0 .938.43.938.912 0 .51-.43.91-.938.91h-3.593v8.098c0 1.69.94 2.306 2.333 2.306.724 0 1.1-.188 1.26-.188.482 0 .885.402.885.885 0 .375-.242.67-.59.804-.59.243-1.234.377-2.038.377-2.225 0-3.914-1.1-3.914-3.914zm21.984 2.762c0 .563-.43 1.045-1.02 1.045-.562 0-1.018-.458-1.018-1.047V17.29c-.94 1.504-2.36 2.71-4.747 2.71-3.35 0-5.308-2.252-5.308-5.55V6.756c0-.59.43-1.046 1.02-1.046.562 0 1.044.456 1.044 1.046v7.185c0 2.576 1.393 4.184 3.833 4.184 2.36 0 4.155-1.742 4.155-4.343V6.757c0-.59.428-1.046 1.018-1.046.563 0 1.02.456 1.02 1.046v12.038zm3.056-3.11v-.054c0-2.922 2.413-4.477 5.925-4.477 1.77 0 3.03.24 4.263.59v-.483c0-2.493-1.526-3.78-4.127-3.78-1.394 0-2.574.32-3.593.777-.135.054-.27.08-.376.08-.482 0-.91-.4-.91-.884 0-.43.293-.75.562-.858 1.367-.59 2.76-.938 4.53-.938 1.958 0 3.46.51 4.478 1.528.938.938 1.42 2.28 1.42 4.048v7.587c0 .59-.428 1.02-.99 1.02-.59 0-.993-.43-.993-.966v-1.26C68.608 18.874 67 20 64.56 20c-2.573 0-5.174-1.475-5.174-4.316zm10.215-1.073v-1.34c-1.02-.293-2.387-.59-4.076-.59-2.6 0-4.048 1.128-4.048 2.87v.054c0 1.743 1.61 2.762 3.485 2.762 2.545 0 4.637-1.555 4.637-3.754zm5.47-13.563c0-.563.455-1.046 1.018-1.046.59 0 1.045.484 1.045 1.047v17.748c0 .59-.427 1.045-1.017 1.045-.59 0-1.045-.457-1.045-1.046V1.046z" fillRule="evenodd" fill="#FFFFFF"></path></svg>
                        </a>
                        <div className={css(styles.pageLinks, styles.rpageLinks)}>
                            <div className={css(styles.linkContainer)}>
                                <a href="/" className={css(styles.pageLink)}>(800) 997-9714</a>
                            </div>
                            <div className={css(styles.linkContainer)}>
                                <Link to="/login" className={css(styles.pageLink)}>Login</Link>
                            </div>
                            <div className={css(styles.linkContainer)}>
                                <Button href="/">Get Started!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default NavBar;
