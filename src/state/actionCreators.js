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
    debugger
    AxiosAuth().get(splitsApi)
        .then(res => {
            debugger
            const splitsAray = res.data.user.splits;
            console.log(splitsAray);
            dispatch({type: types.ADD_SPLITS, payload: splitsAray});
        })
        .catch(error => {
            debugger
        })
}

// export const getSplits = () => dispatch => {
//     const splitsPromise = AxiosAuth(splitsApi);

//     Promise.all([splitsPromise])
//         .then(([splitsApiResponse]) => {
//             debugger
//             const splits = splitsApiResponse.data.user.splits;

//             dispatch({type: types.ADD_SPLITS, payload: splits});
//         });
// }