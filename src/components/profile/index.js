import { h } from 'preact';

import { getAccessToken } from '../../lib/auth';
import Fetch from '../fetch';
import Spinner from '../spinner';

import style from './style.css';

export default function Profile() {
	return (
		<Fetch url={`https://${process.env.AUTH0_DOMAIN}/userinfo`} options={{ headers: { Authorization: `Bearer ${getAccessToken()}` } }}>
			{({ loading, error, data }) => (
				<div class={style.profile}>
					{loading && <Spinner />}
					{error && <p>{error.message}</p>}
					{data &&
						<div>
							<div class={style.profile__picture} >
								<img src={data.picture} alt="profile" />
							</div>
							<p class={style.profile__name}>{data.name}</p>
							<p class={style.profile__nickname}>{data.nickname}</p>
						</div>
					}
				</div>
			)}
		</Fetch>
	);
}
