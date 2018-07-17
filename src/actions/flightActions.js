import * as types from './actionTypes';
import mockFlightApi from '../api/mockFlightApi';

export function loadFlightsSuccess(flights) {
    return { type: types.LOAD_FLIGHTS_SUCCESS, payload: flights };
}

export function loadLastFlightSuccess(flight) {
    return { type: types.LOAD_LAST_FLIGHT_SUCCESS, payload: flight }
}

export function addFlightSuccess(flight) {
    return { type: types.ADD_FLIGHT_SUCCESS, payload: flight };
}

export function addStopSuccess(stop) {
    return { type: types.ADD_STOP_SUCCESS, payload: stop };
}

export function loadFlights(userId) {
    return function (dispatch) {
        return fetch(`api/users/${userId}/flights`)
            .then(res => res.json())
            .then(flights => {
                dispatch(loadFlightsSuccess(flights));
            }).catch(error => {
                throw (error);
            });
    };
}

export function loadLastFlight(userId) {
    return function (dispatch) {
        return fetch(`api/users/${userId}/lastFlight`)
            .then(res => res.json())
            .then(flight => {
                dispatch(loadLastFlightSuccess(flight));
            }).catch(error => {
                throw (error);
            });
    };
}

export function addFlight(flight) {
    return function (dispatch) {
        flight.name = (new Date()).toUTCString();
        flight.createdOn = new Date();
        return fetch(`api/users/${flight.userId}/flights`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(flight)
        })
            .then(res => res.json())
            .then(savedFlight => {
                dispatch(addFlightSuccess(savedFlight));
            }).catch(error => {
                throw (error);
            });
    };
}

export function addStop(stop) {
    return function (dispatch) {
        return mockFlightApi.addStop(stop)
            .then(dispatch(addStopSuccess(stop)))
            .catch(error => {
                throw (error);
            })
    }
}