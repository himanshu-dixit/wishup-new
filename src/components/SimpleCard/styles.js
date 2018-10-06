import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat'
  },
  mainContainer: {
    '@media (min-width: 800px)': {
      paddingTop: '16px'
    },
    backgroundColor: 'rgba(0,0,0,.33)',
    paddingLeft: '2em',
    paddingRight: '2em'
  },
  heading: {
    padding: '224px 0',
    fontSize: '16px',
    textAlign: 'center',
    maxWidth: '960px',
    '@media (max-width: 1800px)': {
      padding: '192px 0'
    },
    '@media (max-width: 1600px)': {
      padding: '176px 0'
    },
    '@media (max-width: 1400px)': {
      padding: '160px 0'
    },
    '@media (max-width: 1200px)': {
      padding: '128px 0'
    }
  },
  offContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '0 auto',
    maxWidth: '1170px',
    width: '100%',
  },
  mainHeading: {
    fontSize: '52px',
    fontWeight: '800',
    color: 'rgb(255,255,255)'
  },
  subHeading:{
      fontSize: '33px',
      fontWeight: '400',
      color: 'rgb(255,255,255)',
lineHeight: '1.2',
padding: '.25em 0'
  }
});

export default styles;
