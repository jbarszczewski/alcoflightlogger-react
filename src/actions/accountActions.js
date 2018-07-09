import * as types from './actionTypes';

export const loginSuccess = (account) => {
    return { type: types.LOGIN_SUCCESS, payload: account };
};

export const loginError = (error) => {
    return { type: types.LOGIN_ERROR, payload: error };
};

export const login = (credentials) => {
    return dispatch => {
        return fetch('api/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
            .then(res => res.json())
            .then(accountId => {
                dispatch(loginSuccess(accountId));
            })
            .catch(error => {
                dispatch(loginError(error));
            });
    };
};

// export const login = (credentials) => {
//     return dispatch => {
//         return fetch(`api/users/${credentials.email}`)
//             .then(res => res.json())
//             .then(account => {
//                 dispatch(loginSuccess(account));
//             })
//             .catch(error => {
//                 dispatch(loginError(error));
//             });
//     };
// };
