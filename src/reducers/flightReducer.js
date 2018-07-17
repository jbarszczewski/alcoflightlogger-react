import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function flightReducer(state = initialState.flights, action) {
    switch (action.type) {
        case types.LOAD_FLIGHTS_SUCCESS:
            return action.payload;
        case types.ADD_FLIGHT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case types.ADD_STOP_SUCCESS:
            return state.map(flight => {
                if (flight.id !== action.payload.flightId) return flight;
                const newStop = { id: flight.stops.length + 1, lat: action.payload.lat, lng: action.payload.lng };
                return Object.assign({}, flight, { stops: [...flight.stops, newStop] });
            });
        default:
            return state;
    }
}