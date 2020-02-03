import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../css/components/FormField.module.css';

export default function FormField(props) {
	const {
		label,
		name,
		type,
		width,
		formref,
		children = null,
		...restProps
	} = props;
	return (
		<div className={`${classes.container} ${classes[width]}`}>
			<label className={classes.label} htmlFor={name}>
				{label}
			</label>
			<input
				name={name}
				className={classes.input}
				id={name}
				ref={formref}
				type={type}
				{...restProps}
			/>
			{children}
		</div>
	);
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	width: PropTypes.oneOf(['half', 'fullwidth']),
	children: PropTypes.element,
};

FormField.defaultProps = {
	width: 'fullwidth',
	type: 'text',
	children: null,
};
