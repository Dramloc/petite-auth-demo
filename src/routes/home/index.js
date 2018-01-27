import { h } from 'preact';

import { login as auth0Login } from '../../lib/auth0';
import { login as facebookLogin } from '../../lib/facebook';
import { login as googleLogin } from '../../lib/google';
import { logout, isAuthenticated } from '../../lib/auth';
import Profile from '../../components/profile';

import style from './style.css';

export default function Home() {
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			{isAuthenticated() ?
				<div>
					<Profile />
					<button class={style['auth-button']} onClick={logout}>Logout</button>
				</div> :
				<div>
					<button class={`${style['auth-button']} ${style['auth-button--auth0']}`} onClick={auth0Login}>Login with Auth0</button>
					<button class={`${style['auth-button']} ${style['auth-button--google']}`} onClick={googleLogin}>Login with Google</button>
					<button class={`${style['auth-button']} ${style['auth-button--facebook']}`} onClick={facebookLogin}>Login with Facebook</button>
				</div>
			}
		</div>
	);
}
