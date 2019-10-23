import {combineReducers} from 'redux';
import usersReducer from "./usersReducer";
import splitsReducer from './splitsReducer';

const rootReducer = combineReducers({
    splits: splitsReducer,
    lumpState: usersReducer
});

export default rootReducer;