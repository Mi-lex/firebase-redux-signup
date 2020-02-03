import React from 'react';
import PropTypes from 'prop-types';
import classes from './FormField.module.css';

export default function FormField(props) {
	const { label, name, type, width, ...restProps } = props;
	return (
		<div className={`${classes.container} ${classes[width]}`}>
			<label className={classes.label} htmlFor={name}>
				{label}
			</label>
			<input name={name} className={classes.input} id={name} type={type} {...restProps} />
		</div>
	);
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	width: PropTypes.oneOf(['half', 'fullwidth']),
};

FormField.defaultProps = {
	width: 'fullwidth',
	type: 'text',
};
