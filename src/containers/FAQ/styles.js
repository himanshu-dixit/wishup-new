import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';
import Background from '../../assets/faq-bg_4aeca1fd.jpg';

const styles = StyleSheet.create({
    container: {
        maxWidth: '1176px',
        width: '100%',
        margin: '0 auto'
    },
    bgImage: {
        backgroundImage: `url(${Background})`
    },
    heading: {
        color: 'inherit',
        fontSize: '1.75em',
        fontWeight: '800',
        lineHeight: '1.33125',
        margin: '0',
        padding: '1em 0 .25em'
    },
    mContainer: {
        maxWidth: '672px',
        width: '100%',
        textAlign: 'left',
        margin: '0 auto',
        color: 'rgba(0,0,0, 0.8)'
    },
    body: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingBottom: '120px',
        paddingTop: '120px',
        margin: '0 auto',
        width: '100%'
    },
    extra: {
        padding: '84px',
        margin: '40px auto',
        backgroundColor: '#eff8fd',
        color: 'rgba(0,0,0,.8)',
        textAlign: 'center',
        borderRadius: '3px',
        width: '100%'
    },
    extraHeading: {
        color: 'inherit',
        fontFamily: 'Proxima Nova,proxima-nova,Helvetica,Arial,sans-serif',
        fontSize: '1.75em',
        fontWeight: '800',
        lineHeight: '1.33125',
        margin: '0',
        padding: '1em 0 .25em'
    },
    extraIcon: {
        height: '56px',
        maxWidth: '56px',
        display: 'inline-block',
        textAlign: 'center'
    },
    button: {
        appearance: 'none',
        backgroundColor: '#357bb8',
        borderRadius: '.1875em',
        borderStyle: 'solid',
        borderWidth: '2px',
        fontSize: '16px',
        cursor: 'pointer',
        display: 'inline-block',
        color: '#fff',
        fontWeight: '700',
        lineHeight: '1',
        margin: '0',
        padding: '0',
        overflow: 'visible',
        outline: '0',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all .1s ease-out',
        textShadow: '0 1px 0 rgba(0,0,0,.1)',
        paddingLeft: '1em',
        paddingRight: '1em',
        position: 'relative',
        ':hover': {
            backgroundColor: '#fff',
            borderColor: '#fff',
            color: '#333a43',
            top: '-2px'
        }
    },
    buttonText: {
        display: 'flex',
        minHeight: '36px',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Proxima Nova Th',
    },
});

export default styles;