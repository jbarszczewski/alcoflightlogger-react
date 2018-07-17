import { combineReducers } from 'redux';
import account from './accountReducer';
import error from './errorReducer';
import flights from './flightReducer';
import currentFlight from './currentFlightReducer';
import location from './locationReducer';

const rootReducer = combineReducers({
    account,
    error,
    flights,
    currentFlight,
    location
});

export default rootReducer;
