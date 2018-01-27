import { parseHash } from 'petite-auth';
import { route } from 'preact-router';

function handleAuthentication() {
	try {
		const authResult = parseHash();
		if (authResult && authResult.access_token) {
			setSession(authResult);
			route('/', true);
			return;
		}
		route('/', true);
	}
	catch (err) {
		console.error(err);
		route('/', true);
	}
}

function setSession(authResult) {
	// Set the time that the access token will expire at
	let expiresAt = JSON.stringify((authResult.expires_in * 1000) + new Date().getTime());
	localStorage.setItem('access_token', authResult.access_token);
	localStorage.setItem('id_token', authResult.id_token);
	localStorage.setItem('expires_at', expiresAt);
}

function logout() {
	// Clear access token and ID token from local storage
	localStorage.removeItem('access_token');
	localStorage.removeItem('id_token');
	localStorage.removeItem('expires_at');
	// navigate to the home route
	route('/', true);
}

function isAuthenticated() {
	if (typeof localStorage === 'undefined') {
		return false;
	}
	// Check whether the current time is past the
	// access token's expiry time
	let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
	return new Date().getTime() < expiresAt;
}

function getAccessToken() {
	const accessToken = localStorage.getItem('access_token');
	if (!accessToken) {
		throw new Error('No access token found');
	}
	return accessToken;
}

export {
	handleAuthentication,
	logout,
	isAuthenticated,
	getAccessToken
};
