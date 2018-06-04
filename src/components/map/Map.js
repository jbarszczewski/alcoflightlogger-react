import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as locationActions from '../../actions/locationActions';
import { Button } from 'react-bootstrap';

import { compose, withHandlers, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJvxe_VovUSvjSVJFre82FmcBLuP6-VwA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onDragEnd: ({ onDragEnd }) => () => {
                const center = refs.map.getCenter();
                onDragEnd({ center: { lat: center.lat(), lng: center.lng() }, zoom: refs.map.getZoom() })
            },
            onZoomChanged: ({ onZoomChanged }) => () => {
                const center = refs.map.getCenter();
                onZoomChanged({ center: { lat: center.lat(), lng: center.lng() }, zoom: refs.map.getZoom() })
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        zoom={props.zoom}
        center={props.center}
        ref={props.onMapMounted}
        onDragEnd={props.onDragEnd}
        onZoomChanged={props.onZoomChanged}>
        <Marker position={props.center} />
    </GoogleMap>
));

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
            <div>
                <p>{this.props.currentLocation.lat}</p>
                <p>{this.props.currentLocation.lng}</p>
                <Button bsStyle="primary" onClick={this.refreshLocation}>refresh</Button>
                <MyMapComponent
                    zoom={this.props.mapZoom}
                    center={{ lat: this.props.currentLocation.lat, lng: this.props.currentLocation.lng }}
                    onDragEnd={this.mapChanged} onZoomChanged={this.mapChanged} />
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
