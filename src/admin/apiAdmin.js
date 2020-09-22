import {API} from '../Config'



//Individual sample

export const read = (orderId,token) => {
    return fetch(`${API}/samples/${orderId}`,{
        method: "GET",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err));
} 


export const listCereals = (token) => {
    return fetch(`${API}/cereals`, {
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

export const listUsers = (token) => {
    return fetch(`${API}/users`, {
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