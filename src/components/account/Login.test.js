import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import Login from './Login';

const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {

    //creates the store with any initial state or middleware needed  
    store = mockStore(initialState);
    wrapper = shallow(<Login store={store} />);
});

describe('login component', () => {
    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });
});