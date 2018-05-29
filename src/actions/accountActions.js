import * as types from './actionTypes';
import mockFlightApi from '../api/mockFlightApi';

export function loginSuccess(account) {
    return { type: types.LOGIN_SUCCESS, account };
}

export function loginError(error) {
    return { type: types.LOGIN_ERROR, error }
}

export function login(credentials) {
    return function (dispatch) {
        return mockFlightApi.login(credentials).then(account => {
            dispatch(loginSuccess(account));
        }).catch(error => {
            dispatch(loginError(error));
        });
    }
}



