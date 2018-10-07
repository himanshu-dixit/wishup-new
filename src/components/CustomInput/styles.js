import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        maxWidth: '1176px',
        width: '100%',
        margin: '0 auto'
    },
    mainInput: {
        justifyContent: 'flex-start',
        textAlign: 'left',
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
    },
    mainInputContainer: {
        flex: '1 1',
        margin: '.75em',
        marginRight: '0',
        marginLeft: '0',
        fontSize: '16px',
        color: 'rgba(0,0,0,.75)',
        lineHeight: '1'
    },
    label: {
        display: 'block'
    },
    inputHeading: {
        color: 'inherit',
        fontSize: '16px',
        padding: '.5em 0',
        display: 'block'
    },
    inputText: {
        width: '100%',
        fontSize: '16px',
        height: '56px',
        padding: '17.6px 16px 14.4px',
        borderColor: 'rgba(0,0,0,0.15)',
        borderRadius: '.1875em',
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, .8)',
        textAlign: 'left',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSizing: 'border-box',
        display: 'inline-block',
        lineHeight: '1',
        margin: '0',
        outline: '0',
        transition: 'all .15s ease-out',
        ':focus':{
            borderBottomWidth: '3px',
            boxShadow: '0 1px 4px rgba(0,0,0,.1)',
            borderBottomColor: '#357bb8'
        }
    },
    redInput: {
        borderColor: '#c00 !important'
    }
});

export default styles;
