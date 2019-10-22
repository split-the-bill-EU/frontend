import {combineReducers} from 'redux';
import countReducer from './counterReducer';

const rootReducer = combineReducers({
    test: countReducer,
});

export default rootReducer;