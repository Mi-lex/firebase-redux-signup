import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Form from '../components/Form';
import { registerUserRequest } from '../redux/ducks/users/actions';

const RegisterUserForm = ({ registerSuccess, loading, registerUser }) => {
	return (
		<Form
			registerSuccess={registerSuccess}
			loading={loading}
			handleSubmit={registerUser}
		/>
	);
};

RegisterUserForm.propTypes = {
	registerSuccess: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { registerSuccess, loading } = state.users;

	return {
		registerSuccess,
		loading,
	};
};

const mapDispatchToProps = {
	registerUser: registerUserRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserForm);
