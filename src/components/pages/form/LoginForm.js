import React from 'react';
import { Form } from './Form';
import Controls from '../controls/Controls';
import { Grid } from '@material-ui/core';
import validator from 'validator';

class LoginForm extends React.Component {
	state = {
		data: {
			email: '',
			password: '',
		},
		errors: {},
		loading: false,
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ data: { ...this.state.data, [name]: value } });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
	};

	validate = (data) => {
		const errors = {};
		if (!data.password) errors.password = `cant't be blank`;
		if (!validator.isEmail(data.email)) errors.email = `cant't be blank`;
		return errors;
	};

	render() {
		const { data, errors } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Grid container>
					<Grid item xs={2} />
					<Grid item xs={8}>
						<Controls.Input
							type="email"
							label="Email"
							name="email"
							id="email"
							value={data.email}
							placeholder="exampl@example.com"
							onChange={this.handleChange}
							error={errors.email}
						/>
						<Controls.Input
							type="password"
							label="Password"
							name="password"
							id="password"
							value={data.password}
							placeholder="enter your password"
							onChange={this.handleChange}
							error={errors.password}
						/>
						<Controls.Button text="login" type="submit" />
					</Grid>
					<Grid item xs={2} />
				</Grid>
			</Form>
		);
	}
}

export default LoginForm;
