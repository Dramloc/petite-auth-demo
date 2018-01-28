import { authorize } from 'petite-auth';

function login() {
	localStorage.setItem('identity_provider', 'google');
	authorize('https://accounts.google.com/o/oauth2/v2/auth', {
		client_id: process.env.GOOGLE_CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token id_token',
		scope: 'openid profile'
	});
}

export {
	login
};
