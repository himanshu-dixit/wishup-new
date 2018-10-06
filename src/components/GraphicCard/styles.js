import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333a43',
        color: '#fff',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
    },
    uContainer: {
        backgroundColor: 'rgba(0,0,0,.33)',
        paddingLeft: '2em',
        paddingRight: '2em',
        margin: '0 auto',
        width: '100%'
    },
    mainContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        maxWidth: '1170px',
        width: '100%'
    },
    content: {
        padding: '224px 0',
        fonSize: '16px',
        textAlign: 'center',
        maxWidth: '960px',
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
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '32px'
    }
});

export default styles;
