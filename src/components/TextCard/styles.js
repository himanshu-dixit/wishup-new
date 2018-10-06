import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#fff',
        color: 'rgba(0,0,0,.8)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
    },
    uContainer: {
        paddingBottom: '140px',
        paddingTop: '140px',
        paddingLeft: '2em',
        paddngRight: '2em',
        margin: '0 auto',
        width: '100%'
    },
    mainContainer: {
        maxWidth: '840px',
        width: '100%',
        textAlign: 'center',
        borderRadius: '3px',
        margin: '0 auto'
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
});

export default styles;
