import { authorize } from 'petite-auth';

import { getAccessToken } from '../auth';

function login() {
	authorize('https://accounts.google.com/o/oauth2/v2/auth', {
		client_id: process.env.GOOGLE_CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token id_token',
		scope: 'openid profile'
	});
}

function getProfile() {
	const accessToken = getAccessToken();
	return fetch('https://graph.facebook.com/me', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	}).then(response => response.json());
}

export {
	login,
	getProfile
};
