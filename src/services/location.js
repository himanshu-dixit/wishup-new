const data = {
    US: {
        'trial': 125,
        'mini': 359,
        'quarter': 449,
        'economy': 649,
        'half': 799,
        'full': 1299,
        'super': 1499,
        'sign': '$'
    },
    IN: {
        'trial': 4999,
        'mini': 12699,
        'quarter': 15999,
        'economy': 20999,
        'half': 26999,
        'full': 49999,
        'super': 59999,
        'sign': require('../assets/rupee.svg'),
        'whitesign': require('../assets/rupee-white.svg'),
        'image': true
    },
    UK: {
        'trial': 89,
        'mini': 239,
        'quarter': 299,
        'economy': 449,
        'half': 549,
        'full': 899,
        'super': 999,
        'sign': '£'
    },
    EUROPE: {
        'trial': 89,
        'mini': 239,
        'quarter': 299,
        'economy': 449,
        'half': 549,
        'full': 899,
        'super': 999,
        'sign': '€'
    },
    OTHER: {
        'trial': 89,
        'mini': 239,
        'quarter': 299,
        'economy': 449,
        'half': 549,
        'full': 899,
        'super': 999,
        'sign': '$'
    }
};
export const getPricing = ()=>{
    return window.country?data[window.country]:data['US'];
}
export default getPricing;
