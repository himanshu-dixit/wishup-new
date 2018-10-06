import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        maxWidth: '1176px',
        width: '100%',
        margin: '0 auto'
    },
    bar: {
        '@media (max-width: 400px)': {
            display: 'none'
        },
        paddingLeft: '2em',
        paddingRight: '2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75px'
    },
    row: {
        alignItems: 'center',
        display: 'flex',
        height: '2em',
        lineHeight: 1
    },
    main: {
        fontSize: '12px',
        fontWeight: 400,
        flex: '4 1'
    },
    pageLinks: {
        marginTop: '18px',
        flex: '1'
    },
    linkContainer: {
        padding: "1em 1em",
        display: 'inline-block',
        ':nth-child(1)': {
            paddingLeft: '0'
        },
        ':nth-last-child(1)': {
            paddingRight: '0'
        }
    },
    pageLink: {
        fontSize: '16px',
        borderTop: '3px solid transparent',
        color: '#fff',
        fontWeight: '700',
        textDecoration: 'none',
        transition: 'all .1s ease-out',
        fontFamily: 'Proxima Nova Th',
        position: 'relative',
        borderBottom: '3px solid transparent',
        padding: '.5em 0',
        ':hover': {
            borderBottomColor: '#5cb85c',
            top: '-2px'
        }

    },
    boldText: {
        color: '#fff',
        fontWeight: 700
    },
    transparent: {
      backgroundColor: 'rgba(0,0,0, 0)',
      position: 'absolute',
      width: '100%'
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
        padding: '7px 6px 5px',
        textDecoration: 'none'
    },
    button: {
        appearance: 'none',
        backgroundColor: 'transparent',
        borderRadius: '.1875em',
        borderStyle: 'solid',
        borderWidth: '.1em',
        cursor: 'pointer',
        display: 'inline-block',
        color: 'rgb(255, 255, 255)',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '1',
        margin: '0',
        padding: '0',
        overflow: 'visible',
        outline: '0',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all .1s ease-out',
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
    logo: {
        position: 'relative',
        top: '6px'
    },
    rpageLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default styles;
