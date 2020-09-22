

import {API} from '../Config';

export const listSamples = (token) => {
    return fetch(`${API}/samples`, {
        method: "GET",
        headers: {
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then( response => {
        return response.json()
    })
    .catch(err => console.log(err))
}