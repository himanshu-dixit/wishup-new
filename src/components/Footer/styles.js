import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    footer: {

    },
    featured: {
        background: '#333a43',
        margin: '0 auto -24px',
        padding: '11.2px 0',
        textAlign: 'center',
        width: '128px',
    },
    navFooter: {
        background: '#333a43',
        color: '#ccc',
    },
    featuredText: {
        display: 'inline-block',
        verticalAlign: 'middle'
    },
    container: {
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1170px',
        margin: '0 auto',
        padding: '48px 0',
        width: '95%'
    },
    col: {
        padding: '16px',
        textAlign: 'center',
        width: '20%'
    },
    listLink: {
        display: 'block',
        fontFamily: 'Proxima Nova,proxima-nova,Helvetica,Arial,sans-serif',
        padding: '6.4px',
        textDecoration: 'none',
        transition: 'all .1s ease-out',
        opacity: '.8',
    },
    listHeading: {
        letterSpacing: '1px',
        padding: '8px 0',
        textTransform: 'uppercase'
    },
    white: {
        color: '#fff',
        fontSize: '16px'
    },
    bottomFooter: {
        background: '#1e2733',
        color: 'hsla(0,0%,100%,.8)',
        fontFamily: 'Proxima Nova,proxima-nova,Helvetica,Arial,sans-serif',
        fontSize: '16px',
    },
    bFC: {
        margin: '0 auto',
        maxWidth: '1024px',
        padding: '48px 0',
        width: '95%'
    },
    inv: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '1em 0',
        width: '100%'
    },
    invLinks: {
        display: 'block',
        color: '#999',
        cursor: 'pointer',
        opacity: '.8',
        padding: '16px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all .2s ease-out',
        width: '16%'
    },
    invLContainer: {
        color: '#fff',
        fill: '#fff',
        padding: '2px'
    },
    iconContainer: {
        display: 'inline-block',
        verticalAlign: 'middle'
    },
    icon: {
        height: '16px'
    },
    invT: {
        fontSize: '11.2px',
        fontWeight: '700',
        letterSpacing: '1px',
        padding: '2px',
        textTransform: 'uppercase'

    },
    copyright: {
        background: 'rgba(0,0,0,.25)',
        color: 'hsla(0,0%,100%,.5)',
        fontSize: '12px',
        padding: '1.5rem 0',
        textAlign: 'center'
    }
});

export default styles;
