import { combineReducers } from 'redux';
import account from './accountReducer';
import error from './errorReducer';
import flights from './flightReducer';
import location from './locationReducer';

const rootReducer = combineReducers({
    account,
    error,
    flights,
    location
});

export default rootReducer;
