import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as flightActions from '../../actions/flightActions';
import { Col, Grid, Row } from 'react-bootstrap';

class Flights extends Component {
    componentWillMount() {
        this.props.actions.loadFlights(this.props.account._id);
    }

    render() {
        const isLoggedIn = this.props.account && this.props.account.name;
        return (
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <div style={{ backgroundColor: 'lightgray' }}>
                            <p>{isLoggedIn ? `Welcome ${this.props.account.name}` : 'Login'}</p>
                            <p>Twoje loty</p>
                            {this.props.flights.map(flight =>
                                <div key={flight._id}>
                                    Id:{flight._id}, Stops:
                                    <ul>
                                        {flight.stops.map(stop =>
                                            <li key={stop._id}>
                                                Id:{stop._id}, lat:{stop.lat}, lng:{stop.lng}
                                            </li>
                                        )}
                                    </ul>

                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Flights.propTypes = {
    actions: PropTypes.object.isRequired,
    flights: PropTypes.array.isRequired,
    account: PropTypes.object.isRequired,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        flights: state.flights,
        account: state.account,
        loading: false
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(flightActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights);