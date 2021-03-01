import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1.5),
		display: 'flex',
		direction: 'column',
	},
}));
const Button = (props) => {
	const classes = useStyles();
	const { text, variant, color, size, onClick, ...others } = props;
	return (
		<MuiButton
			className={classes.root}
			color={color || 'primary'}
			variant={variant || 'contained'}
			size={size || 'large'}
			onClick={onClick}
			{...others}>
			{text}
		</MuiButton>
	);
};

export default Button;
