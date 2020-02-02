import React from 'react';
import RegisterUserForm from '../components/RegisterUserForm';
import rocketIcon from '../../img/rocket.svg';

const wrapperStyles = {
	display: 'flex',
	height: '100vh',
	alignItems: 'center',
};

const containerStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '90%',
	maxWidth: '800px',
	height: '80vh',
	maxHeight: '500px',
	margin: '0 auto',
	backgroundColor: '#F8F9FB',
	borderRadius: '2px',
	overflow: 'hidden',
};

const rocketIconStyles = {
	height: '100%',
	width: 'auto',
};

export default function App() {
	return (
		<div className="wrapper" style={wrapperStyles}>
			<div className="container" style={containerStyles}>
				<RegisterUserForm />
				<img
					src={rocketIcon}
					alt="rocket"
					className="rocket"
					style={rocketIconStyles}
				/>
			</div>
		</div>
	);
}
