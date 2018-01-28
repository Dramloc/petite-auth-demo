import { authorize } from 'petite-auth';

function login() {
	localStorage.setItem('identity_provider', 'facebook');
	authorize('https://www.facebook.com/v2.11/dialog/oauth', {
		client_id: process.env.FACEBOOK_CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token',
		scope: 'public_profile'
	});
}

export {
	login
};
