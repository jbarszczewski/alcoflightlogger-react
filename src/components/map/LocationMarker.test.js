import React from 'react';
import { shallow } from 'enzyme';
import LocationMarker from './LocationMarker';

it('renders without crashing', () => {
    shallow(<LocationMarker text="test" />);
});
