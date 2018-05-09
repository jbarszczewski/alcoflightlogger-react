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
        case types.ADD_STOP_SUCCESS:
            const nextState =
                state.map(flight => {
                    if (flight.id !== action.stop.flightId) return flight;
                    const newStop = { id: flight.stops.length + 1, lat: action.stop.lat, lng: action.stop.lng };
                    return Object.assign({}, flight, { stops: [...flight.stops, newStop] });
                });
            return nextState;
        // return state.map((flight) => {
        //     if (flight.id == action.stop.flightId) {
        //         const newStop = { id: flight.stops.length + 1, lat: action.stop.lat, lng: action.stop.lng };
        //         flight.stops = flight.stops.concat(newStop);
        //         return Object.assign({}, flight);
        //     }
        //     return flight;
        // })
        // return [
        //     ...state.filter(flight => flight.id !== action.flight.id),
        //     Object.assign({}, flight.stops = flight.stops.concat(action.stop))
        // ];
        default:
            return state;
    }
}