import { authorize } from 'petite-auth';

import { getAccessToken } from '../auth';

function login() {
	authorize('https://www.facebook.com/v2.11/dialog/oauth', {
		client_id: process.env.FACEBOOK_CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token',
		scope: 'public_profile'
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
