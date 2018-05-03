import * as types from './actionTypes';

export function updateLocationAction(location) {
    return { type: types.UPDATE_LOCATION, location };
}

export function updateLocation(location) {
    return function (dispatch) {
        dispatch(updateLocationAction(location));
    }
}