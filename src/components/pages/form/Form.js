import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFormControl-root': {
			width: '80%',
			margin: theme.spacing(2),
		},
	},
}));
export const Form = (props) => {
	const classes = useStyles();
	const { children, ...other } = props;
	return (
		<form className={classes.root} {...other}>
			{children}
		</form>
	);
};
