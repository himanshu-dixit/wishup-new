import React, { Component } from 'react';
import SimpleCard from '../../components/SimpleCard';
import DetailedCard from '../../components/DetailedCard';
import TextCard from '../../components/TextCard';
import GraphicCard from '../../components/GraphicCard';

import assistantImage from '../../assets/zirtual-assistant_4c16d9bf.svg';
import businessImage from '../../assets/client-logos_9d66967c.png';

import successImage from '../../assets/streamline_e17cdcf9.png';
import superHumanImage from '../../assets/superhumans_87d19b39.png';
import todoImage from '../../assets/to-do_224a05ca.jpg';

import styles from './styles';
import {css} from "aphrodite";
import {search} from 'react-icons-kit/fa/search'
import Icon from "react-icons-kit";

const buttons = [{href: "/", text: "Request a Consulation", color: ""}, {href: "/", text: "View Plans & Pricing"}];
class HomePage extends Component {
    renderLinks(){
        const links = [{icon: search, text: "Research & Reports"}, {icon: search, text: "Research & Reports"}, {icon: search, text: "Research & Reports"}, {icon: search, text: "Research & Reports"}];
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
  render() {
        //streamline_e17cdcf9
    return (
      <div>
        <SimpleCard
            style={styles}
            heading="Work. Life. Balanced."
            buttons={buttons}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonText}
            subHeading={<span>Virtual assistants for entrepreneurs,<br/> professionals, and small teams.</span>}
            headingStyle={styles.headingS}
        ></SimpleCard>
          <DetailedCard background={styles.grey} image={assistantImage} style={styles}>
              <h3 className={css(styles.heading)}>Supercharge your life with a Zirtual Virtual Assistant.</h3>
              <p className={css(styles.p)}>Your inbox is overflowing, your appointments are a mess, you have travel that needs booked, and your "to do" list is endless. VA's have all of the skills to handle both your work and personal needs, and can start relieving your stress immediately.</p>
              <p className={css(styles.p)}><strong>Zirtual VA's can complete many types of tasks, including:</strong></p>
              <div className={css(styles.table)}>
                  <div className={css(styles.col)}>
                      {this.renderLinks()}
                  </div>
                  <div className={css(styles.col)}>
                      {this.renderLinks()}
                  </div>
              </div>
          </DetailedCard>
          <TextCard image={businessImage}>Virtual Assistants are used by busy people from amazing companies all over the world.</TextCard>
          <DetailedCard background={styles.grey} image={successImage} imageStyle={styles.successImg} style={styles}>
              <h3 className={css(styles.heading)}>Streamline your success, in work and life.</h3>
              <p className={css(styles.p)}>Zirtual is the secret weapon of successful people. Not just in work, but in life. We give you more time to focus on the big picture by taking care of the little details. Stuff like scheduling meetings, paying bills, and booking travel. As a Zirtual client, you get your very own Virtual Assistant (VA) — a smart, highly trained US-based point person who works remotely as your right hand and left brain. You delegate a task and your VA is on it.</p>
              <p className={css(styles.p)}><strong>Bills? Paid... Inbox? Cleared... Travel? Booked...&nbsp;<a className={css(styles.linkA)}>Get Started</a> </strong></p>
          </DetailedCard>
          <DetailedCard background={styles.white} image={superHumanImage} leftImage={true} imageStyle={styles.successImg} contentStyle={styles.content} style={styles}>
              <h3 className={css(styles.heading)}>Some call them superhumans, we call them VAs.</h3>
              <p className={css(styles.p)}>At Zirtual, we hire US-based, detail-oriented people who strive to provide our clients with the best assistance on the planet. All Virtual Assistants go through a rigorous, multi-step vetting process that tests everything from their communication and tech skills to their creativity and resourcefulness. Thousands apply, but only the best of the best get to call themselves VAs..</p>
              <p className={css(styles.p)}><strong>Smart, reliable, personable virtual assistants. &nbsp;<a className={css(styles.linkA)}>Get Started</a> </strong></p>
          </DetailedCard>
          <GraphicCard background={styles.graphicCard}             buttonStyle={styles.buttonStyle}
                       textStyle={styles.buttonText}></GraphicCard>
          <DetailedCard background={styles.white} image={todoImage} imageStyle={styles.successImg} contentStyle={styles.content} style={styles}>
              <h3 className={css(styles.heading)}>Give us your to-do list and get on with your love-to-do list.</h3>
              <p className={css(styles.p)}>Get started by having your VA set up meetings, manage your busy schedule and streamline all the information that pours into your inbox. They can help remind you of that important call, deal with the phone company, track your packages and plan your weekend getaway.</p>
              <p className={css(styles.p)}><strong>With your VA handling all the small stuff, you can start focusing on what's truly important, in work and life. &nbsp;<a className={css(styles.linkA)}>Get Started</a> </strong></p>
          </DetailedCard>
      </div>
    );
  }
}

export default HomePage;
