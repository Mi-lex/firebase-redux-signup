import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Form from '../components/Form';
import { registerUserRequest } from '../redux/ducks/users/actions';

const RegisterUserForm = ({ registerUser }) => {
	return <Form handleSubmit={registerUser} />;
};

RegisterUserForm.propTypes = {
	registerUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	registerUser: registerUserRequest,
};
export default connect(null, mapDispatchToProps)(RegisterUserForm);
