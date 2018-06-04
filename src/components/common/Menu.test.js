import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

let wrapper;

describe('Menu', () => {
    beforeEach(() => {
        wrapper = shallow(<Menu />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });
});