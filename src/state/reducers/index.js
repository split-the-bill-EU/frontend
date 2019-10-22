import {combineReducers} from 'redux';
import countReducer from './counterReducer';
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    test: countReducer,
    lumpState: usersReducer
});

export default rootReducer;