import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        color: 'rgba(0,0,0,.8)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
    },
    uContainer:  {
        paddingLeft: '2em',
        paddingRight: '2em',
        margin: '0 auto',
        width: '100%'
    },
    mainContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
        maxWidth: '1200px',
        width: '100%'
    },
    content: {
        alignItems: 'center',
        color: '#333a43',
        display: 'flex',
        flex: '1 1',
        textAlign: 'left',
        padding: '4em 0',
        width: '50%'
    },
    image: {
        textAlign: 'right',
alignItems: 'center',
justifyContent: 'center',
display: 'flex',
padding: '4em 0',
width: '50%'
    },
img: {
    height: 'auto'
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
    }
});

export default styles;
