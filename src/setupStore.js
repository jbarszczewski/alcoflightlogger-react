import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function setupStore(initialState) {
    return createStore(rootReducer, {...initialState}, applyMiddleware(thunk));
};