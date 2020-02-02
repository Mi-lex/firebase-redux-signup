import React from 'react';
import yourTextIcon from '../../img/yourtext.svg';
import FormField from './FormField';

const titleStyles = {
	marginTop: '1.5rem',
	marginBottom: '1.5rem',
	fontSize: '2rem',
	fontWeight: 'normal',
	color: '#3D2875',
};

const formContainerStyles = {
	padding: '40px 65px',
};

const iconStyles = {
	width: 'auto',
	height: '18px',
};

export default function RegisterForm() {
	return (
		<div className="formContainer" style={formContainerStyles}>
			<img src={yourTextIcon} alt="your text" style={iconStyles} />
			<h2 style={titleStyles}>Registration Form</h2>
			<form action="POST">
				<div className="flex justify-content-between">
					<FormField name="name" label="First Name" width="half" />
					<FormField name="lastName" label="Last Name" width="half" />
				</div>
				<FormField name="username" label="Username" />
				<FormField name="email" label="Email" type="email" />
				<FormField name="number" label="Phone Number" type="tel" />

				<input type="submit" value="Register" />
			</form>
		</div>
	);
}
