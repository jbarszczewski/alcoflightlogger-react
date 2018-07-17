import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as accountActions from '../../actions/accountActions';
import * as flightActions from '../../actions/flightActions';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: 'test@email.com',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    getEmailValidationState() {
        if (this.validateEmail(this.state.email)) {
            return 'success';
        } else if (this.state.email.length > 0) {
            return 'error';
        }

        return null;
    }

    validateEmail(email) {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email));
    }

    handleChange(e) {
        if (e.target.id === 'emailText') {
            this.setState({ email: e.target.value });
        } else if (e.target.id === 'passwordText') {
            this.setState({ password: e.target.value });
        }
    }

    login() {
        this.props.actions.login({ email: this.state.email, password: this.state.password });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.account._id !== this.props.account._id) {
            this.props.actions.loadLastFlight(newProps.account._id);
            this.props.history.push('/');
        }
    }

    render() {
        const isLoggedIn = this.props.account && this.props.account.name;
        return (
            <div>
                <p>{isLoggedIn ? `Welcome ${this.props.account.name}` : 'Login'}</p>
                <p>{this.props.error}</p>
                <form>
                    <FormGroup
                        controlId="emailText"
                        validationState={this.getEmailValidationState()}>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            placeholder="email"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup
                        controlId="passwordText">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            placeholder="password"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.login}>Login</Button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.object.isRequired,
    account: PropTypes.object,
    error: PropTypes.string,
    history: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        account: state.account,
        error: state.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, accountActions, flightActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);