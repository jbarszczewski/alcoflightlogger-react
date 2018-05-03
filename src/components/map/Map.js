import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import * as flightActions from '../../actions/flightActions';

class Map extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        currentLocation: {lat: 0, lng: 0},
        mapZoom: 18
    };
        this.refreshLocation = this.refreshLocation.bind(this);
        this.mapChanged = this.mapChanged.bind(this);
    }

    refreshLocation(){
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({ currentLocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude}});
                this.forceUpdate();
            }, (error) => {
                alert(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000 });
        } else {
            alert('No geolocation available');
        }
    }

    mapChanged(event){
        // {center, zoom, bounds, ...other}        
        this.setState({currentLocation: {lat: event.center.lat, lng: event.center.lng}, mapZoom: event.zoom})
    }

    componentWillMount() {
        this.refreshLocation();
    }

    render() {
        return(
            <div style={{height: '60vh', width: '80%'}}>
            <p>{this.state.currentLocation.lat}</p>
            <p>{this.state.currentLocation.lng}</p>
            <p>{this.state.mapZoom}</p>
            <input type="submit" value="refresh" onClick={this.refreshLocation}/>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyAJvxe_VovUSvjSVJFre82FmcBLuP6-VwA'}}
            center={this.state.currentLocation}
            zoom={this.state.mapZoom}
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
    return {}
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
