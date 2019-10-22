import * as actionTypes from "../actionTypes";

const initialUsers = [];
const initialState = {
    users: [],
    currentUser: {
        bills: []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USERS:
            return {
                ...state,
                users: action.payload
            };

        case actionTypes.ADD_BILLS:
            return {
                ...state,
                bills: action.payload
            }
    
        default:
            return state;
    }
}