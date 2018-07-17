import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentFlightReducer(state = initialState.currentFlight, action) {
    if (action.type === types.LOAD_LAST_FLIGHT_SUCCESS) {
        return action.payload;
    } else if (action.type === types.LOGIN_ERROR) {
        return initialState.currentFLight;
    } else {
        return state;
    }
}