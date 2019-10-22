import * as actionTypes from "../actionTypes";

const initialUsers = [];

export default (state = initialUsers, action) => {
    switch (action.type) {
        case actionTypes.DECREMENT:
            return state;
    
        default:
            return state;
    }
}