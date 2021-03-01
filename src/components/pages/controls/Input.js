import React from 'react';
import { TextField } from '@material-ui/core';
const Input = (props) => {
	const { label, id, name, value, onChange, error = null, ...other } = props;
	return (
		<TextField
			variant="outlined"
			label={label}
			value={value}
			id={id}
			name={name}
			onChange={onChange}
			{...other}
			{...(error && { error: true, helperText: error })}
		/>
	);
};

export default Input;
