import * as types from '../actionTypes';

const initialSplits = [];

export default function splitsReducer(state = initialSplits, action) {
    switch(action.type) {
        case types.ADD_SPLITS:
            return action.payload;
        default:
            return state;
    }
}