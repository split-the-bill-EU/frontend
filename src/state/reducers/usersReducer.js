import * as actionTypes from "../actionTypes";

const initialState = {
    users: [],
    currentUser: {
        "id": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "bills": [],
        "splits": []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USERS:
            return {
                ...state,
                users: action.payload
            };

        case actionTypes.ADD_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }

        case actionTypes.ADD_BILLS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    bills: action.payload
                }
            }
    
        default:
            return state;
    }
}