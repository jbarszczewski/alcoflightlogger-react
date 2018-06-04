import React from 'react';
import { shallow } from 'enzyme';
import LocationMarker from './LocationMarker';

let wrapper;

describe('LocationMarker', () => {
    beforeEach(() => {
        wrapper =
            shallow(<LocationMarker text="test" />);
    })

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('to have desired text', () => {
        expect(wrapper.text()).toEqual('test');
    });
});
