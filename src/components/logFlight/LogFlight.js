import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as flightActions from '../../actions/flightActions';
import Map from '../map/Map';

class LogFlight extends Component {
    constructor(props, context){
        super(props,context);
        
        this.onSave = this.onSave.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadFlights();
    }

    onSave() {
        this.props.actions.addFlight({stops: 2})
    }

    render() {
        return (
            <div>
                <Map />
                 <input
                type="submit"
                disabled={this.props.loading}
                value={this.props.loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={this.onSave}/>

                <p>Twoje loty</p>
                {this.props.flights.map(flight =>
                    <div key={flight.id}>
                        Id:{flight.id}, Stops:{flight.stops}
                    </div>
                )}
            </div>
        );
    }
}

LogFlight.propTypes = {
    actions: PropTypes.object.isRequired,
    flights: PropTypes.array.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        flights: state.flights,
        loading: false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogFlight);