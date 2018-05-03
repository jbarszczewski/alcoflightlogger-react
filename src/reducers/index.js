import { combineReducers } from 'redux';
import flights from './flightReducer';
import location from './locationReducer';

const rootReducer = combineReducers({
    flights,
    location
});

export default rootReducer;
