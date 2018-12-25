/*
Date : 5 Dec 2018
Parameters : endpoint, requestData
Description - Service to interact with server and fetch the data by calling an API.
*/

const serverURI = 'https://infligo.serveo.net/wishup';

export const sendRequest = (endpoint, requestData) => {
    return fetch(serverURI + endpoint, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            'Content-type': 'application/json',
        },
        credentials: 'same-origin',
    })
        .then(response => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
            // Handle the error by explicit method, if required by application.
        });
};

export default sendRequest;
