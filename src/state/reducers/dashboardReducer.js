import * as types from '../actionTypes';

const initialState = {
    owing: '',
    owed: '',
    splitsList: [],
    splitsListTitle: '',
    peopleIOwe: [],
    peopleOwingMe: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_OWING_AMOUNT:
            return {...state, owing: action.payload}
        case types.SET_OWED_AMOUNT:
            return {...state, owed: action.payload}
        case types.SET_PEOPLE_I_OWE:
            return {...state, peopleIOwe: action.payload.list}
        case types.SET_PEOPLE_OWING_ME:
            return {...state, peopleOwingMe: action.payload.list}
        case types.SET_LIST_OWED:
            return {...state, splitsList: [...state.peopleOwingMe], splitsListTitle:'People Owing Me'}
        case types.SET_LIST_OWING:
            return {...state, splitsList: [...state.peopleIOwe], splitsListTitle:'People I Owe'}
        default:
            return state;
    }
}