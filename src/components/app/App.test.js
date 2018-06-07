import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('app component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });
});