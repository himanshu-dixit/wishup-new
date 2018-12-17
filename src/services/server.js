const serverURI = 'http://localhost/wishup';

export const sendRequest = (endpoint, requestData) => fetch(serverURI+endpoint, {
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
    });

export default sendRequest;
