import * as types from './actionTypes';

export const loginSuccess = (account) => {
    return { type: types.LOGIN_SUCCESS, account };
};

export const loginError = (error) => {
    return { type: types.LOGIN_ERROR, error };
};

export const login = (credentials) => {
    return dispatch => {
        return fetch(`/user/${credentials.email}`)
            .then(res => res.json())
            .then(account => {
                dispatch(loginSuccess(account));
            })
            .catch(error => {
                dispatch(loginError(error));
            });
    };
};
