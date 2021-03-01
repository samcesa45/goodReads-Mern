import axios from 'axios';

export const api = {
	user: {
		login: (credentials) =>
			axios.post('/api/auth', { credentials }).then((res) => res.data.user),
	},
};
