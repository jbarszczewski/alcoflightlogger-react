import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

let wrapper;

describe('Menu component', () => {
    beforeEach(() => {
        wrapper = shallow(<Menu />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});