import * as actionTypes from "../actionTypes";

const initialState = {
    users: [],
    name: '',
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
                name: action.payload.firstName,
            }
    
        default:
            return state;
    }
}