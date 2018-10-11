import { fadeInDown } from 'react-animations';
import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    uContainer: {
        backgroundColor: '#f6f4ef'
    },
    mainContainer: {
        maxWidth: '1176px',
        width: '100%',
        color: 'rgba(0,0,0,.8)',
        textAlign: 'left',
        borderRadius: '3px',
        margin: '0 auto',
        position: 'relative',
        top: '-80px'
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
        width: '100%',
        flex: '1 1',
        paddingLeft: '1em',
        paddingRight: '1em'

    },
    buttonText:{
        minHeight: '56px'
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
    card: {
        width: '25%',
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '16px',
        padding: '.25em',
        textAlign: 'center'
    },
    cardUContainer: {
        background: "#fff",
        borderRadius: '3px',
        boxShadow: '0 2px 12px rgba(0,0,0,.15)',
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        alignItems: 'stretch'
    },
    cardTopContainer: {
        display: 'block',
        minHeight: '40px',
        zIndex: '99'
    },
    cardMainContainer: {
        padding: '16px 24px 32px',
        width: '100%'
    },
    cardHeading: {
        fontSize: '1em',
        margin: '0',
        letterSpacing: '1px',
        textTransform: 'uppercase'
    },
    cardSubHeading: {
        color: 'rgba(0,0,0,.75)',
        padding: '4px 0 0',
        fontSize: '1em',
        margin: '0',
    },
    cardSpacing: {
        color: 'rgba(0,0,0,.25)',
        padding: '18px 0 0',
        textDecoration: 'line-through',
        fontSize: '12.8px',
        height: '12.8px',
    },
    cardPricing: {
        alignItems: 'flex-end',
        display: 'flex',
        fontWeight: '400',
        justifyContent: 'center',
        lineHeight: '.95',
        padding: '16px 0 0',
        margin: '0',
        width: '100%'
    },
    cardCurrencySign: {
        fontSize: '24px',
        paddingBottom: '24px'
    },
    cardPrice: {
        fontSize: '56px',
        fontWeight: '700',
        padding: '0 1.6px',
        fontFamily: 'Proxima Nova Th'
    },
    cardTime: {
        fontSize: '16px',
        textAlign: 'left',
        paddingBottom: '8px',
        maxWidth: '48px',
    },
    cardInfo: {
        listStyle: 'none',
        padding: '26px 0',
        margin: '0',
        paddingTop: '0px'
    },
    cardInfoItem: {
        fontSize: '16px',
        padding: '8px 0',
        margin: '0'
    },
    cardButton: {
        display: 'flex'
    },
    cardDiscount:{
        display: 'block',
        minHeight: '40px',
        zIndex: '99'
    },
    cardDiscountText: {
        backgroundColor: '#357bb8',
        color: 'hsla(0,0%,100%,.95)',
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px',
        display: 'inline-block',
        fontSize: '12.8px',
        fontWeight: '700',
        lineHeight: '1',
        padding: '9.6px 20px',
        textTransform: 'uppercase',
        fontFamily: 'Proxima Nova Th'
    },
    info: {
        margin: '40px auto',
        textAlign: 'center',
        borderRadius: '3px',
        width: '100%',
        position: 'relative',
        top: '-80px'
    },
    infoP: {
        fontSize: '1.125em',
        lineHeight: '1.5',
        padding: '.5em 0'
    },
    promo: {
        maxWidth: '672px',
        width: '100%',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,.15)',
        backgroundColor: '#e8e7de',
        color: 'rgba(0,0,0,.8)',
        textAlign: 'left',
        borderRadius: '3px',
        margin: '0 auto',
        position: 'relative',
        top: '-80px'
    },
    promoForm: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '16px',
        justifyContent: 'center',
        padding: '1em',
        width: '100%'
    },
    promoLabel: {
        padding: '.5em',
        width: '50%',
    },
    promoInputContainer: {
        padding: '.5em',
        textAlign: 'center',
        width: '35%'
    },
    promoInput: {
        width: '100%',
        fontFamily: 'Monaco,monospaced',
        fontSize: '12px',
        height: '42px',
        padding: '13.2px 12px 10.8px',
        borderRadius: '.1875em',
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,.15)',
        color: 'rgba(0, 0, 0, 0.8)',
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: '0 1px 4px rgba(0,0,0,.05)',
        boxSizing: 'border-box',
        display: 'inline-block',
        lineHeight: '1',
        margin: '0',
        outline: '0',
        transition: 'all .15s ease-out'
    },
    promoButtonContainer: {
        padding: '.5em',
        width: '15%'
    },
    promoButtonStyle: {
        borderWidth: '1px',
        fontSize: '12px',
        borderColor: 'rgba(51,58,67,.9)',
        color:'rgba(0,0,0, 0.8)',
        paddingLeft: '2em',
        paddingRight: '2em',
        ':hover': {
            backgroundColor: 'rgba(51,58,67,.1)',
            borderColor: '#333a43',
            color: '#333a43'
        }
    },
    promoButtonText: {
        minHeight: '36px'
    },
    plansInclude: {
        backgroundColor: '#fff',
        color: 'rgba(0,0,0,.8)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat'
    },
    plansIncludeU: {
        paddingBottom: '120px',
        paddingTop: '120px',
        paddingLeft: '2em',
        paddingRight: '2em',
        margin: '0 auto',
        width: '100%'
    },
    includeContainer: {
        maxWidth: '1176px',
        width: '100%',
        textAlign: 'center',
        borderRadius: '3px',
        margin: '0 auto',
    },
    includeHeading: {
        color: 'inherit',
        fontSize: '2.5em',
        fontWeight: '800',
        lineHeight: '1.2375',
        margin: '0',
        padding: '1em 0 .25em'
    },
    includePlansContainer: {
        alignItems: 'stretch',
        display: 'flex',
        flexWrap: 'wrap',
        justsifyContent: 'center',
        width: '100%'
    },
    includePlan: {
        width: '25%',
        padding: '48px',
        textAlign: 'center',
        borderRadius: '3px',
        margin: '0 auto'
    }
});

export default styles;
