import * as types from '../actionTypes';

const initialState = {
    owing: '',
    owed: '',
    splitsList: [],
    splitsListTitle: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_OWING_AMOUNT:
            return {...state, owing: action.payload}
        case types.SET_OWED_AMOUNT:
            return {...state, owed: action.payload}
        case types.SET_SPLITS_INFO:
            return {...state, splitsList: action.payload.list, splitsListTitle:action.payload.title}
        default:
            return state;
    }
}