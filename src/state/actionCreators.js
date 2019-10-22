import * as types from './actionTypes';
import AxiosAuth from "../axios/AxiosAuth";

export function increment(){
    return {type: types.INCREMENT}
}

export function decrement (){
    return {type: types.DECREMENT}
}

export function reset(){
    return {type: types.RESET}
}

export const addUsers = (users) => ({
    type: types.ADD_USERS,
    payload: users,
})

export const getUsers = () => dispatch => {
    AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users')
    .then(res => {
        console.log(res.data)
        dispatch(addUsers(res.data.users))
    })
    .catch(err => alert(err))
}