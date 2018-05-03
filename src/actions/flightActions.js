import * as types from './actionTypes';
import mockFlightApi from '../api/mockFlightApi';

export function loadFlightsSuccess(flights) {
    return { type: types.LOAD_FLIGHTS_SUCCESS, flights };
}

export function addFlightSuccess(flight) {
    return { type: types.ADD_FLIGHT_SUCCESS, flight };
}

export function addStopSuccess(flight) {
    return { type: types.ADD_STOP_SUCCESS, flight };
}

export function loadFlights() {
    return function (dispatch) {
        return mockFlightApi.getAllFlights().then(flights => {
            dispatch(loadFlightsSuccess(flights));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addFlight(flight) {
    return function (dispatch) {
        return mockFlightApi.addFlight(flight).then(savedFlight => {
            dispatch(addFlightSuccess(savedFlight));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addStop(stop) {
    return function (dispatch) {
        return mockFlightApi.getFlight(stop.flightId).then(flight => {
            flight.stops.push({ id: flight.stops.length + 1, lat: stop.lat, lng: stop.lng });
            dispatch(addStopSuccess(flight));
        }).catch(error => {
            throw (error);
        })
    }
}