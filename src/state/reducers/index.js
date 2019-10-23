import {combineReducers} from 'redux';
import countReducer from './counterReducer';
import splitsReducer from './splitsReducer';

const rootReducer = combineReducers({
    test: countReducer,
    splits: splitsReducer,
});

export default rootReducer;