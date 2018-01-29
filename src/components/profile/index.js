import { h } from 'preact';

import { getAccessToken } from '../../lib/auth';
import Fetch from '../fetch';
import Spinner from '../spinner';

import style from './style.css';

export default function Profile({ identityProvider }) {
	let url;
	let getName;
	let getPicture;
	switch (identityProvider) {
		case 'auth0':
			url = `https://${process.env.AUTH0_DOMAIN}/userinfo`;
			getName = data => data.name;
			getPicture = data => data.picture;
			break;
		case 'google':
			url = 'https://www.googleapis.com/plus/v1/people/me';
			getName = data => data.displayName;
			getPicture = data => data.image.url;
			break;
		case 'facebook':
			url = 'https://graph.facebook.com/me?fields=id,name,picture';
			getName = data => data.name;
			getPicture = data => data.picture.data.url;
			break;
	}
	return (
		<Fetch url={url} options={{ headers: { Authorization: `Bearer ${getAccessToken(identityProvider)}` } }}>
			{({ loading, error, data }) => (
				<div class={style.profile}>
					{loading && <Spinner />}
					{error && <p>{error.message}</p>}
					{data &&
						<div>
							<div class={style.profile__picture} >
								<img src={getPicture(data)} alt="profile" />
							</div>
							<p class={style.profile__name}>{getName(data)}</p>
						</div>
					}
				</div>
			)}
		</Fetch>
	);
}
