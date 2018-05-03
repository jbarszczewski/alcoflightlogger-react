import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function flightReducer(state = initialState.flights, action) {
    switch (action.type) {
        case types.LOAD_FLIGHTS_SUCCESS:
            return action.flights;
        case types.ADD_FLIGHT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.flight)
            ];
        default:
            return state;
    }
}