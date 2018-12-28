/*
Date : 5 Dec 2018
Parameters : endpoint, requestData
Description - Fetches the location from request data received and pass it components
*/
import sendRequest from './server'
const data = {
    US: {
        'trial': 125,
        'mini': 359,
        'quarter': 449,
        'economy': 649,
        'half': 799,
        'full': 1299,
        'super': 1499,
        'sign': require('../assets/svg/dollar.svg'),
        'whitesign': require('../assets/svg/dollar-white.svg'),
        'image': true
    },
    IN: {
        'trial': 4999,
        'mini': 12699,
        'quarter': 15999,
        'economy': 20999,
        'half': 26999,
        'full': 49999,
        'super': 59999,
        'sign': require('../assets/svg/rupee.svg'),
        'whitesign': require('../assets/svg/rupee-white.svg'),
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
        'sign': require('../assets/svg/pound.svg'),
        'whitesign': require('../assets/svg/pound-white.svg'),
        'image': true
    },
    EUROPE: {
        'trial': 89,
        'mini': 239,
        'quarter': 299,
        'economy': 449,
        'half': 549,
        'full': 899,
        'super': 999,
        'sign': require('../assets/svg/euro.svg'),
        'whitesign': require('../assets/svg/euro-white.svg'),
        'image': true
    },
    OTHER: {
        'trial': 89,
        'mini': 239,
        'quarter': 299,
        'economy': 449,
        'half': 549,
        'full': 899,
        'super': 999,
        'sign': require('../assets/svg/dollar.svg'),
        'whitesign': require('../assets/svg/dollar-white.svg'),
        'image': true
    }
};

export const getPricing = ()=>{
    // sendRequest('/get_location','').then((result)=>{
    //     return data[result.country];
    // }).catch(()=>{
    //     console.log("Error in fetching the resources");
    // })
    return data['US'];
}
export const getTiming = ()=>{
    sendRequest('/get_location','').then((result)=>{
        return result.country!=="IN"?'Mon - Fri from 9 am to 6 pm EST':'Mon - Fri from 9 am to 6 pm IST';
    }).catch(()=>{
        console.log("Error in fetching the resources");
    })
    return 'Mon - Fri from 9 am to 6 pm EST';
}

export default getPricing;
