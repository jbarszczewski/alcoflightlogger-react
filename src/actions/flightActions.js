import * as types from './actionTypes';
import FlightApi from '../api/mockFlightApi';

export function loadFlightsSuccess(flights) {
    return { type: types.LOAD_FLIGHTS_SUCCESS, flights };
}

export function loadFlights() {
    return function (dispatch) {
        return FlightApi.getAllFlights().then(flights => {
            dispatch(loadFlightsSuccess(flights));
        }).catch(error => {
            throw (error);
        });
    };
}