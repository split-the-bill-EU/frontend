import * as actionTypes from "../actionTypes";

const initialUsers = [];

export default (state = initialUsers, action) => {
    switch (action.type) {
        case actionTypes.ADD_USERS:
            return action.payload;
    
        default:
            return state;
    }
}