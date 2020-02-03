import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import yourTextIcon from '../../img/yourtext.svg';
import FormField from './FormField';
import classes from '../../css/components/RegisterUserForm.module.css';
import rocketIcon from '../../img/rocket.svg';

const Form = (props) => {
	const { register, handleSubmit, errors } = useForm();
	const { registerSuccess, loading } = props;
	const [user, setUser] = useState({});
	const handleChange = (ev) => {
		const { name, value } = ev.target;

		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onSubmit = () => {
		props.handleSubmit(user);
	};

	return (
		<div
			className={`flex justify-content-between ${
				registerSuccess ? classes.success : ''
			}`}
		>
			<div className={classes.container}>
				<img className={classes.icon} src={yourTextIcon} alt="your text" />
				<h2 className={classes.title}>Registration Form</h2>
				<form action="POST" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex justify-content-between">
						<FormField
							name="name"
							label="First Name"
							width="half"
							formref={register({ required: true, minLength: 2 })}
							onChange={handleChange}
						>
							{errors.name && <span>This field is required</span>}
						</FormField>
						<FormField
							name="lastName"
							label="Last Name"
							width="half"
							formref={register({ required: true, minLength: 2 })}
							onChange={handleChange}
						>
							{errors.lastName && <span>This field is required</span>}
						</FormField>
					</div>
					<FormField
						name="username"
						label="Username"
						formref={register({ required: true, minLength: 2 })}
						onChange={handleChange}
					>
						{errors.username && <span>This field is required</span>}
					</FormField>
					<FormField
						name="email"
						label="Email"
						type="email"
						formref={register({
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
								message: 'invalid email address',
							},
						})}
						onChange={handleChange}
					>
						{errors.email && <span>This field is required</span>}
					</FormField>
					<FormField
						name="number"
						label="Phone Number"
						type="tel"
						formref={register({
							required: true,
							pattern: {
								value: /^\+?[0-9]+/i,
								message: 'invalid number',
							},
						})}
						onChange={handleChange}
					>
						{errors.number && <span>Wrong number buddy</span>}
					</FormField>

					<input
						className={classes.submitBtn}
						type="submit"
						disabled={loading}
						value="Register"
					/>
				</form>
			</div>
			<figure className={classes.imgContainer}>
				<img src={rocketIcon} alt="rocket" className={classes.img} />
			</figure>
		</div>
	);
};

Form.propTypes = {
	registerSuccess: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default Form;
