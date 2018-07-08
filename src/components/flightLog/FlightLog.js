import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as flightActions from '../../actions/flightActions';
import Map from '../map/Map';
import { Button, Col, Grid, Row } from 'react-bootstrap';

class FlightLog extends Component {
    constructor(props, context) {
        super(props, context);

        this.onCreateNewFlight = this.onCreateNewFlight.bind(this);
        this.addNewStop = this.addNewStop.bind(this)
    }

    onCreateNewFlight() {
        this.props.actions.addFlight({ stops: [] })
    }

    addNewStop() {
        this.props.actions.addStop({
            flightId: this.props.flights.length,
            lat: this.props.location.lat,
            lng: this.props.location.lng
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Button
                        disabled={this.props.loading}
                        bsStyle="primary"
                        bsSize="large"
                        block
                        onClick={this.addNewStop}>{this.props.loading ? 'Saving...' : 'Fuel stop'}</Button>
                </Row>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <div style={{ backgroundColor: 'beige' }}>
                            <Map />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div style={{ backgroundColor: 'lightgray' }}>
                            <p>Twoje loty</p>
                            {this.props.flights.map(flight =>
                                <div key={flight.id}>
                                    Id:{flight.id}, Stops:
                                    <ul>
                                        {flight.stops.map(stop =>
                                            <li key={stop.id}>
                                                Id:{stop.id}, lat:{stop.lat}, lng:{stop.lng}
                                            </li>
                                        )}
                                    </ul>

                                </div>
                            )}

                            <Button
                                disabled={this.props.loading}
                                bsStyle="primary"
                                onClick={this.onCreateNewFlight}>{this.props.loading ? 'Saving...' : 'New flight'}</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

FlightLog.propTypes = {
    actions: PropTypes.object.isRequired,
    flights: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        flights: state.flights,
        location: state.location,
        loading: false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightLog);