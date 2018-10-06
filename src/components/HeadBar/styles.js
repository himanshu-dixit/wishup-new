import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    maxWidth: '1176px',
    width: '100%',
    margin: '0 auto'
  },
  headBar: {
    '@media (max-width: 800px)': {
      display: 'none'
    },
    paddingLeft: '2em',
    paddingRight: '2em'
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    height: '2em',
    lineHeight: 1
  },
  main: {
    fontSize: '12px',
    fontWeight: 400
  },
  toggleContainer: {
    flex: '1 1',
    color: '#999',
    cursor: 'pointer'
  },
  boldText: {
    color: '#fff',
    fontWeight: 700
  },
  fadeDown: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  col: {
    position: 'relative'
  },
  vIcon: {
      position: 'absolute',
      right: '-14px'
  },
  aPad: {
    color: '#999',
    padding: '7px 6px 0px',
    textDecoration: 'none'
  },
    center:{
      display: 'flex',
      height: '100%'
    }
});

export default styles;
