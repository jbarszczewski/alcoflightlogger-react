import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import * as flightActions from '../../actions/flightActions';

class Map extends Component {

    componentWillMount() {
        this.currentLocation = {lat: 51.5, lng: 0}
        if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.currentLocation = {
                lat: position.coords.latitude,
                 lng: position.coords.longitude}
        }, (error) => {
            alert(error.message);
        },
        { enableHighAccuracy: false, timeout: 5000 });
    } else {
        alert('No geolocation available');
    }
    
    }

    render() {
        return(
            <div style={{height: '60vh', width: '80%'}}>
            <p>{this.currentLocation.lat}</p>
            <p>{this.currentLocation.lng}</p>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyAJvxe_VovUSvjSVJFre82FmcBLuP6-VwA'}}
            defaultCenter={this.currentLocation}
            defaultZoom={this.props.mapZoom}>
          </GoogleMapReact>
            </div>
        )
    }
}

Map.propTypes = {
    currentLocation: PropTypes.object,
    mapZoom: PropTypes.number
}

function mapStateToProps(state) {
    return {
        currentLocation: {lat: 53.33, lng: 30.33},
        mapZoom: 11
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
