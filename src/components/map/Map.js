import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
//import * as flightActions from '../../actions/flightActions';
import * as locationActions from '../../actions/locationActions';

class Map extends Component {
    constructor(props, context) {
        super(props, context);
        this.refreshLocation = this.refreshLocation.bind(this);
        this.mapChanged = this.mapChanged.bind(this);
    }

    refreshLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.props.actions.updateLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    mapZoom: this.props.mapZoom
                });
            }, (error) => {
                alert(error.message);
            },
                { enableHighAccuracy: true, timeout: 15000 });
        } else {
            alert('No geolocation available');
        }
    }

    mapChanged(event) {
        this.props.actions.updateLocation({
            lat: event.center.lat,
            lng: event.center.lng,
            mapZoom: event.zoom
        });
    }

    componentDidMount() {
        this.refreshLocation();
    }

    render() {
        return (
            <div style={{ height: '60vh', width: '80%' }}>
                <p>{this.props.currentLocation.lat}</p>
                <p>{this.props.currentLocation.lng}</p>
                <p>{this.props.mapZoom}</p>
                <input type="submit" value="refresh" onClick={this.refreshLocation} />
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAJvxe_VovUSvjSVJFre82FmcBLuP6-VwA' }}
                    center={this.props.currentLocation}
                    zoom={this.props.mapZoom}
                    onChange={this.mapChanged}>
                </GoogleMapReact>
            </div>
        )
    }
}

Map.propTypes = {
    actions: PropTypes.object.isRequired,
    currentLocation: PropTypes.object,
    mapZoom: PropTypes.number
}

function mapStateToProps(state) {
    return {
        currentLocation: { lat: state.location.lat, lng: state.location.lng },
        mapZoom: state.location.mapZoom
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(locationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
