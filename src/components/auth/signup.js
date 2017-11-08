import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import * as auth from '../../store/actions/auth';
const appSS = require('../../styles/app');

function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    authenticated: state.auth.authenticated,
    error: state.auth.error,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser: auth.createUser,
    changePage: auth.changePage,
  }, dispatch);
};

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      username: null,
      password: null,
      confirmPassword: null,
      emailError: null,
      usernameError: null,
      passwordError: null,
      confirmPasswordError: null,
    };
  }

  componentWillMount() {}

  componentWillUnmount() {}

  createUser() {
    if (this.validInput()) {
      this.props.createUser(this.state.email, this.state.username, this.state.password);
    }
  }

  validInput() {
    let valid = true;

    if (!this.state.email || !this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      valid = false;
      this.setState({ emailError: 'invalid email address' });
    }
    if (!this.state.username || this.state.username.length < 1 || this.state.username.length > 15) {
      valid = false;
      this.setState({ usernameError: 'username must be between 1 and 15 characters' });
    }
    if (!this.state.password || this.state.password.length < 6) {
      valid = false;
      this.setState({ passwordError: 'password must be at least 6 characters' });
    }
    if (!this.state.confirmPassword || this.state.password !== this.state.confirmPassword) {
      valid = false;
      this.setState({ confirmPasswordError: 'passwords don\'t match' });
    }

    return valid;
  }

  render() {
    return (
      <Col size={14/14}>
      
        {/* FORM CONTAINER */}
        <Row size={13/16} style={[]}>
          <Col size={14/14} style={{ justifyContent: 'center' }}>
            <FormLabel>Email</FormLabel>
            <FormInput
              onChangeText={(value) => {
                this.setState({ email: value, emailError: null });
              }}
            />
            {this.state.emailError && <FormValidationMessage>{this.state.emailError}</FormValidationMessage>}
            <FormLabel>Username</FormLabel>
            <FormInput
              maxLength={15}
              onChangeText={(value) => {
                this.setState({ username: value, usernameError: null });
              }}
            />
            {this.state.usernameError && <FormValidationMessage>{this.state.usernameError}</FormValidationMessage>}
            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry={true}
              onChangeText={(value) => {
                this.setState({ password: value, passwordError: null });
              }}
            />
            {this.state.passwordError && <FormValidationMessage>{this.state.passwordError}</FormValidationMessage>}
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              secureTextEntry={true}
              onChangeText={(value) => {
                this.setState({ confirmPassword: value, confirmPasswordError: null });
              }}
            />
            {this.state.confirmPasswordError && <FormValidationMessage>{this.state.confirmPasswordError}</FormValidationMessage>}
            {this.props.error && <FormValidationMessage>{this.props.error}</FormValidationMessage>}
          </Col>
        </Row>
      
        {/* BUTTON CONTAINER */}
        <Row size={3/16} style={[appSS.center]}>
          <Col size={1/14}></Col>
          <Col size={12/14}>
            <Button
              large
              title='Signup'
              icon={{name: 'user-o', type: 'font-awesome', size: 20 }}
              backgroundColor='steelblue'
              onPress={this.createUser.bind(this)}
              loading={this.props.loading}
              disabled={this.props.loading}
              borderRadius={5}
              containerViewStyle={{ borderRadius: 5 }}
            />
            <Row size={1/4} style={{ paddingTop: 5 }}>
              <Col size={7/14}>
                <TouchableHighlight
                  onPress={() => { console.log('Remembering password...') }}>
                  <Text style={{ paddingLeft: 20, color: 'steelblue' }}>Forgot Password</Text>
                </TouchableHighlight>
              </Col>
              <Col size={7/14}>
                <TouchableHighlight
                  onPress={() => { this.props.changePage('login') }}>
                  <Text style={{ textAlign: 'right', paddingRight: 20, color: 'steelblue' }}>Login</Text>
                </TouchableHighlight>
              </Col>
            </Row>
          </Col>
          <Col size={1/14}></Col>
        </Row>
        
      </Col>
    );
  }
}

Signup.propTypes = {
  createUser: PropTypes.func,
  changePage: PropTypes.func,
  loading: PropTypes.bool,
  authenticated: PropTypes.bool,
  error: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);