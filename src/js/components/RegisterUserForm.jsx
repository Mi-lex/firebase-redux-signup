import React from 'react';
import yourTextIcon from '../../img/yourtext.svg';
import FormField from './FormField';
import classes from '../../css/components/RegisterUserForm.module.css';
import rocketIcon from '../../img/rocket.svg';

export default function RegisterForm() {
	const success = true;

	return (
		<div className={`flex justify-content-between ${success ? classes.success : ''}`}>
			<div className={classes.container}>
				<img className={classes.icon} src={yourTextIcon} alt="your text" />
				<h2 className={classes.title}>Registration Form</h2>
				<form action="POST">
					<div className="flex justify-content-between">
						<FormField name="name" label="First Name" width="half" />
						<FormField name="lastName" label="Last Name" width="half" />
					</div>
					<FormField name="username" label="Username" />
					<FormField name="email" label="Email" type="email" />
					<FormField name="number" label="Phone Number" type="tel" />

					<input className={classes.submitBtn} type="submit" value="Register" />
				</form>
			</div>
			<figure className={classes.imgContainer}>
				<img src={rocketIcon} alt="rocket" className={classes.img} />
			</figure>
		</div>
	);
}
