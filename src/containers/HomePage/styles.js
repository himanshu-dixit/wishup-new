import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';
import Background from '../../assets/home-bg_3b45c955.jpg';
import cardBackground from '../../assets/collage-bg_5315d257.jpg'
const styles = StyleSheet.create({
  bgImage: {
    backgroundImage: `url(${Background})`
  },
    headingS:{
      padding: '280px 0'
    },
    buttonStyle: {
        borderWidth: '2px !important',
        boxShadow: '0 1px 12px rgba(0,0,0,.1)',
        color: '#fff !important',
        textShadow: '0 1px 0 rgba(0,0,0,.1)',
backgroundColor: '#5cb85c !important',
borderColor: '#5cb85c',
fontSize: '18px !important',
        margin: '10px 5px',
    },
    buttonText:{
      minHeight: '56px !important'
    },
    grey: {
      background: '#f6f4ef'
    },
    heading:{
        fontSize: '2.5em',
        fontWeight: '800',
        lineHeight: '1.2375',
        margin: '0',
        padding: '1em 0 .25em',
        color: 'inherit'
    },
    p: {
        color: 'rgba(51,58,67,.8)',
        fontSize: '1.125em',
        lineHeight: '1.5',
        padding: '.5em 0',
        margin: '0'
    },
    strong: {
        fontSize: '1.125em'
    },
    table: {
        alignItems: 'stretch',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
    },
    col: {
        width: '50%'
    },
    link: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        textAlign: 'left'
    },
    linkIcon: {
        flexgrow: '0',
    },
    iconSpan: {
        height: '20px',
        maxWidth: '20px',
        display: 'inline-block',
        textAlign: 'center'
    },
    linkText:{
        flexGrow: '1',
        padding: '0 .75em',
    },
    linkA: {
        borderBottom: '1px dotted #357bb8',
        textDecoration: 'none',
        color: '#357bb8',
        transition: 'all .15s ease-in-out',
        cursor: 'pointer'
    },
    successImg: {
        marginTop: '-4em',
        padding: '0',
        alignItems: 'flex-end'
    },
    white: {
      background: '#fff'
    },
    content: {
        padding: '6em 2em 6em 3em'
    },
    graphicCard: {
        backgroundImage: `url(${cardBackground})`
    }

});

export default styles;
