import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
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
});

export default styles;