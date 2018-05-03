import React from 'react';
import PropTypes from 'prop-types'

const LocationMarker = ({ text }) => <div>{text}</div>;

LocationMarker.propTypes = {
    text: PropTypes.string.isRequired
}

export default LocationMarker;