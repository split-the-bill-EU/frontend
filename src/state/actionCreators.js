import * as types from './actionTypes';
import AxiosAuth from '../axios/AxiosAuth';

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