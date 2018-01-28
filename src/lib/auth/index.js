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
	const identityProvider = localStorage.getItem('identity_provider');
	// Set the time that the access token will expire at
	const expiresAt = JSON.stringify((authResult.expires_in * 1000) + new Date().getTime());
	localStorage.setItem(`${identityProvider}.access_token`, authResult.access_token);
	localStorage.setItem(`${identityProvider}.id_token`, authResult.id_token);
	localStorage.setItem(`${identityProvider}.expires_at`, expiresAt);
}

function logout(identityProvider) {
	return () => {
		// Clear access token and ID token from local storage
		localStorage.removeItem(`${identityProvider}.access_token`);
		localStorage.removeItem(`${identityProvider}.id_token`);
		localStorage.removeItem(`${identityProvider}.expires_at`);
		// navigate to the home route
		route('/', true);
	};
}

function isAuthenticated(identityProvider) {
	if (typeof localStorage === 'undefined') {
		return false;
	}
	// Check whether the current time is past the
	// access token's expiry time
	let expiresAt = JSON.parse(localStorage.getItem(`${identityProvider}.expires_at`));
	return new Date().getTime() < expiresAt;
}

function getAccessToken(identityProvider) {
	const accessToken = localStorage.getItem(`${identityProvider}.access_token`);
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
