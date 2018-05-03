import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function locationReducer(state = initialState.location, action) {
    if (action.type === types.UPDATE_LOCATION) {
        return  action.location;
    } else {
        return state;
    }
}