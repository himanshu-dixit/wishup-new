import React, { Component } from 'react';
import SimpleCard from '../../components/SimpleCard';
import PricingCard from '../../components/PricingCard';
import styles from './styles';
import data from '../../data/FAQ';
import { StyleSheet, css } from 'aphrodite';

class Pricing extends Component {
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
                <SimpleCard
                    headingStyle={styles.featuredHeading}
                    style={styles}
                    mainheadingStyle={styles.mainheadingStyle}
                    heading="Plans & Pricing"
                    subHeading={<span>Flexible monthly plans to fit any workload.</span>}
                ></SimpleCard>
                <PricingCard></PricingCard>
            </div>
        );
    }
}

export default Pricing;
