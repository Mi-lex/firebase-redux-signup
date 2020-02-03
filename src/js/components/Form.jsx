import React, { useState } from 'react';
import PropTypes from 'prop-types';
import yourTextIcon from '../../img/yourtext.svg';
import FormField from './FormField';
import classes from '../../css/components/RegisterUserForm.module.css';
import rocketIcon from '../../img/rocket.svg';

const Form = (props) => {
	const [user, setUser] = useState({});
	const success = false;
	const handleChange = (ev) => {
		const { name, value } = ev.target;

		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		props.handleSubmit(user);
	};

	return (
		<div
			className={`flex justify-content-between ${
				success ? classes.success : ''
			}`}
		>
			<div className={classes.container}>
				<img className={classes.icon} src={yourTextIcon} alt="your text" />
				<h2 className={classes.title}>Registration Form</h2>
				<form action="POST" onSubmit={handleSubmit}>
					<div className="flex justify-content-between">
						<FormField
							name="name"
							label="First Name"
							width="half"
							onChange={handleChange}
						/>
						<FormField
							name="lastName"
							label="Last Name"
							width="half"
							onChange={handleChange}
						/>
					</div>
					<FormField name="username" label="Username" onChange={handleChange} />
					<FormField
						name="email"
						label="Email"
						type="email"
						onChange={handleChange}
					/>
					<FormField
						name="number"
						label="Phone Number"
						type="tel"
						onChange={handleChange}
					/>

					<input className={classes.submitBtn} type="submit" value="Register" />
				</form>
			</div>
			<figure className={classes.imgContainer}>
				<img src={rocketIcon} alt="rocket" className={classes.img} />
			</figure>
		</div>
	);
};

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default Form;
