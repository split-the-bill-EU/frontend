import * as types from './actionTypes';
import AxiosAuth from "../axios/AxiosAuth";


const splitsApi = 'https://split-the-bill-api.herokuapp.com/api/users/profile';

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

export const currentUser = (user) => ({
    type: types.ADD_CURRENT_USER,
    payload: user,
})

export const getUsers = () => dispatch => {
    AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users')
    .then(res => {
        console.log(res.data)
        dispatch(addUsers(res.data.users))
    })
    .catch(err => console.log(err))
}

export const getUserDetails = () => dispatch => {
    AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users/profile')
    .then(res => {
        console.log(res.data);
        dispatch(currentUser(res.data.user))        
    })
    .catch(err => console.log(err))
}
export const getSplits = () => dispatch => {
    AxiosAuth().get(splitsApi)
        .then(res => {
            const splitsAray = res.data.user.splits;
            console.log(splitsAray);
            dispatch({type: types.ADD_SPLITS, payload: splitsAray});
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const getBillSplits = () => dispatch => {
    AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users/profile')
    .then(res => {
        console.log(res.data);
        dispatch({type: types.ADD_BILLSPLITS, payload: res.data.user.bills.splits});
    })
    .catch(err => console.log(err))
}


