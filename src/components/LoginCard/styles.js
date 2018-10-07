import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    uContainer: {
        marginTop: '-80px'
    },
    mainContainer: {
        maxWidth: '756px',
        width: '100%',
        backgroundColor: '#fff',
        color: 'rgba(0,0,0,.8)',
        boxShadow: '0 3px 12px rgba(0,0,0,.15)',
        textAlign: 'left',
        borderRadius: '3px',
        margin: '0 auto',
    },
    content: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: '2 1',
        minWidth: '256px',
        padding: '2em'
    },
    navContainer: {
        backgroundColor: '#eff8fd',
        color: 'rgba(51,58,67,.8)',
        flex: '1 1',
        fontSize: '16px',
        padding: '2em',
        '@media (min-width: 800px)': {
            borderTopRightRadius: '3px',
            borderBottomRightRadius: '3px',
            borderLeft: '1px solid rgba(0,0,0,.1)',
            backgroundColor: '#eff8fd',
            color: 'rgba(51,58,67,.8)',
            flex: '1 1',
            fontSize: '16px',
            padding: '2em'
        }
    },
    heading: {
        color: 'inherit',
        fontWeight: '800',
        margin: '0',
        padding: '0.20em 0 .20em',
        fontSize: '20px',
        lineHeight: '1.25'
    },
    buttonStyle: {
        borderWidth: '2px',
        boxShadow: '0 1px 12px rgba(0,0,0,.1)',
        color: '#fff !important',
        textShadow: '0 1px 0 rgba(0,0,0,.1)',
        backgroundColor: '#5cb85c !important',
        borderColor: '#5cb85c',
        fontSize: '16px !important',
        margin: '.75em',
        width: 'auto',
        flex: '1 1',
        marginRight: '0',
        paddingLeft: '1em',
        paddingRight: '1em'

    },
    buttonText:{
        minHeight: '56px !important'
    },
    spacingDiv: {
      flex: '2 1',
      margin: '.75em',
      marginLeft: '0',
    },
    buttonsContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '1em'
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
});

export default styles;
