import * as actionTypes from "../actionTypes";

// const initialUsers = [];
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
               currentUser: action.payload
            }

        case actionTypes.ADD_BILLSPLITS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    bills: {
                        ...state.currentUser.bills,
                        splits: action.payload
                    }
                }
            }
    
        default:
            return state;
    }
}