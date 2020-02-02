import React from 'react';
import PropTypes from 'prop-types';

export default function FormField({ label, name, type, width, ...restProps }) {
	return (
		<div className="formField">
			<label className={`fieldLabel ${width}`} htmlFor={name}>
				{label}
			</label>
			<input className="fieldInput" id={name} type={type} {...restProps} />
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
