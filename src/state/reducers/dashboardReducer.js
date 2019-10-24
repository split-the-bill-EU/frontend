import * as types from '../actionTypes';

const initialState = {
    owing: '',
    owed: '',
    splitsList: [],
    splitsListTitle: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}