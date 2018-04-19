import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as flightActions from '../../actions/flightActions';

class LogFlight extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.actions.loadFlights();
    }

    render() {
        return (
            <div>
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
    flights: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        flights: state.flights
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogFlight);