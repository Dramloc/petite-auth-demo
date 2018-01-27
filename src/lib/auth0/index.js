import { authorize } from 'petite-auth';

function login() {
	authorize(`https://${process.env.AUTH0_DOMAIN}/authorize`, {
		client_id: process.env.AUTH0_CLIENT_ID,
		redirect_uri: process.env.CALLBACK_URL,
		response_type: 'token id_token',
		scope: 'openid profile'
	});
}

export {
	login
};
