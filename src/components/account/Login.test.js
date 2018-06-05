import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import initialState from '../../reducers/initialState';
import Login from './Login';

const mockStore = configureStore();
let wrapper;
let store;

describe('Login component', () => {
    beforeEach(() => {
        //creates the store with any initial state or middleware needed  
        store = mockStore(initialState);
        wrapper = shallow(<Login store={store} />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});