import { Typography } from '@material-ui/core';
import React from 'react';
import LoginForm from './form/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';
class LoginPage extends React.Component {
	state = {};

	submit = (data) => {
		this.props.login(data).then(() => this.props.history.push('/'));
	};
	render() {
		return (
			<div>
				<Typography
					variant="h4"
					style={{ textAlign: 'center', marginTop: '1rem' }}>
					Login Page
				</Typography>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

export default connect(null, { login })(LoginPage);
