import React, { Component } from 'react';
import SimpleCard from '../../components/SimpleCard';
import styles from './styles';
import data from '../../data/FAQ';
import { StyleSheet, css } from 'aphrodite';



class FAQ extends Component {
    renderFAQ() {
        const listItems = data.map((faq, index) => {
                const output = `<h2 class="${css(styles.heading)}">` + faq.heading + `</h2>` + faq.answer;
                return (
                    <div dangerouslySetInnerHTML={{__html: output}} key={index}>
                    </div>
                );
        });
        return (
            <div className={css(styles.container)}>{listItems}</div>
        );
    }
    render() {
        return (
            <div>
                <SimpleCard style={styles} heading="Questions &amp;&nbsp;Answer"></SimpleCard>
                <div className={css(styles.body)}>
                    <div className={css(styles.mContainer)}>
                        <article>
                        {this.renderFAQ()}
                        </article>
                        <div className={css(styles.extra)}>
                            <h2 className={css(styles.extraHeading)}>
                                <span className={css(styles.extraIcon)}>

                                </span>
                                <br/>
                                Not seeing your question here?
                                <p>
                                    <a  className={css(styles.button)} href="/">
                                        <span className={css(styles.buttonText)}>
                                            <span>Ask us directly!</span>
                                        </span>
                                    </a>
                                </p>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;
