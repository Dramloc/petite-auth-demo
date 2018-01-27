import { authorize } from 'petite-auth';

import { getAccessToken } from '../auth';

function login() {
	authorize(`https://${process.env.AUTH0_DOMAIN}/authorize`, {
		client_id: process.env.AUTH0_CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token id_token',
		scope: 'openid profile'
	});
}

function getProfile() {
	const accessToken = getAccessToken();
	return fetch(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	}).then(response => response.json());
}

export {
	login,
	getProfile
};
