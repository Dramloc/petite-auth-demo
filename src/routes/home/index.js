import { h } from 'preact';

import { login as auth0Login } from '../../lib/auth0';
import { login as facebookLogin } from '../../lib/facebook';
import { login as googleLogin } from '../../lib/google';
import { logout, isAuthenticated } from '../../lib/auth';
import Button from '../../components/button';
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
					<Button onClick={logout}>Logout</Button>
				</div> :
				<div>
					<Button class={style['button--auth0']} onClick={auth0Login}>Login with Auth0</Button>
					<Button class={style['button--google']} onClick={googleLogin}>Login with Google</Button>
					<Button class={style['button--facebook']} onClick={facebookLogin}>Login with Facebook</Button>
				</div>
			}
		</div>
	);
}
