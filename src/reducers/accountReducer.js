import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.account, action) {
    if (action.type === types.LOGIN_SUCCESS) {
        return action.account;
    } else if (action.type === types.LOGIN_ERROR) {
        debugger
        return null;
    } else {
        return state;
    }
}