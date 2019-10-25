import {combineReducers} from 'redux';
import usersReducer from "./usersReducer";
import splitsReducer from './splitsReducer';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
    splits: splitsReducer,
    lumpState: usersReducer,
    dashboard: dashboardReducer,
});

export default rootReducer;