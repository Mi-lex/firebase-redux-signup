import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterUserForm from './RegisterUserForm';
import ErrorMessage from '../components/ErrorMessage';

const App = ({ error }) => {
	return (
		<div className="page-wrapper flex">
			<div className="page-container">
				<RegisterUserForm />
			</div>
			{error && <ErrorMessage className="error">{error}</ErrorMessage>}
		</div>
	);
};

App.propTypes = {
	error: PropTypes.string,
};

App.defaultProps = {
	error: null,
};

const mapStateToProps = (state) => {
	const { error } = state.users;

	return {
		error,
	};
};

export default connect(mapStateToProps)(App);
