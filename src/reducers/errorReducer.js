import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function errorReducer(state = initialState.error, action) {
    if (action.type === types.LOGIN_SUCCESS) {
        return null;
    } else if (action.type === types.LOGIN_ERROR) {
        if (action.error === undefined)
            return null;
        return action.error;
    } else {
        return state;
    }
}