import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import initialState from '../../reducers/initialState';
import Map from './Map';

const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Map store={store} />);
})

it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
});