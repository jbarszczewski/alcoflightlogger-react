import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as flightActions from '../../actions/flightActions';
import Map from '../map/Map';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class FlightLog extends Component {
    constructor(props, context) {
        super(props, context);

        this.onCreateNewFlight = this.onCreateNewFlight.bind(this);
        this.addNewStop = this.addNewStop.bind(this)
    }

    onCreateNewFlight() {
        this.props.actions.addFlight({ userId: this.props.account._id, stops: [] })
    }

    addNewStop() {
        this.props.actions.addStop(
            this.props.currentFlight._id,
            {
                date: new Date(),
                lat: this.props.location.lat,
                lng: this.props.location.lng
            });
    }

    render() {
        const isLoggedIn = this.props.account && this.props.account.name;
        return (
            <Grid>
                <Row>
                    {isLoggedIn ?
                        <Button
                            disabled={this.props.loading}
                            bsStyle="primary"
                            bsSize="large"
                            block
                            onClick={this.addNewStop}>{this.props.loading ? 'Saving...' : 'Fuel stop'}</Button>
                        :
                        <LinkContainer to="/login">
                            <Button
                                bsStyle="primary"
                                bsSize="large"
                                block>Log in</Button>
                        </LinkContainer>
                    }
                </Row>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <div style={{ backgroundColor: 'beige' }}>
                            <Map />
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        {isLoggedIn && this.props.currentFlight.stops ?
                            <div style={{ backgroundColor: 'lightgray' }}>
                                <p>Current flight</p>
                                <div>
                                    Id: {this.props.currentFlight._id}
                                    <br />
                                    Created on: {this.props.currentFlight.createdOn}
                                    <br />
                                    Stops:
                                    <ul>
                                        {this.props.currentFlight.stops.map(stop =>
                                            <li key={stop._id}>
                                                Id:{stop._id}, lat:{stop.lat}, lng:{stop.lng}
                                            </li>
                                        )}
                                    </ul>

                                </div>
                                <Button
                                    disabled={this.props.loading}
                                    bsStyle="primary"
                                    onClick={this.onCreateNewFlight}>{this.props.loading ? 'Saving...' : 'New flight'}</Button>
                            </div>
                            :
                            <p>Siging to see current flight</p>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

FlightLog.propTypes = {
    actions: PropTypes.object.isRequired,
    currentFlight: PropTypes.object,
    location: PropTypes.object.isRequired,
    account: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        currentFlight: state.currentFlight,
        account: state.account,
        location: state.location,
        error: state.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightLog);