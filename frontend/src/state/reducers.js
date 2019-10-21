import * as types from './actionTypes';

const initialValue = 0;

export function countReducer (state = initialValue, action) {
    switch (action.type){
        case types.INCREMENT:
            return state + 1;
        case types.DECREMENT:
            return state - 1;
        case types.RESET:
            return 0;
        default:
            return state;
    }
}