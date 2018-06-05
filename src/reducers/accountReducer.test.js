import accountReducer from './accountReducer';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

describe('Account reducer', () => {
    it('returns initial state', () => {
        expect(accountReducer(undefined, {})).toEqual(initialState.account);
    });

    it('sets up the account details on success', () => {
        const action = {type: types.LOGIN_SUCCESS, payload: {name: 'test-user', email: 'test@email.com'}};
        const state = accountReducer(undefined, action);
        expect(state).toEqual({name: 'test-user', email: 'test@email.com'});
    });

    it('reset the account details on error', () => {
        const action = {type: types.LOGIN_ERROR, payload: {error: 'test-error'}};
        const state = accountReducer(undefined, action);
        expect(state).toEqual(initialState.account);
    });
});