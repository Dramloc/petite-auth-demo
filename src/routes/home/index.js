import { h } from 'preact';

import { login as auth0Login } from '../../lib/auth0';
import { login as facebookLogin } from '../../lib/facebook';
import { login as googleLogin } from '../../lib/google';
import { logout, isAuthenticated } from '../../lib/auth';
import Button from '../../components/button';
import Page from '../../components/page';
import Profile from '../../components/profile';

import style from './style.css';

export default function Home() {
	return (
		<Page class={style.home}>
			<h1>petite &middot; auth</h1>
			<p>🔒 Tiny (520B) JavaScript OAuth2 client</p>

			<h2>Try it!</h2>
			<h3>Auth0</h3>
			{isAuthenticated('auth0') ?
				<div>
					<Profile identityProvider="auth0" />
					<Button onClick={logout('auth0')}>Logout</Button>
				</div> :
				<div>
					<Button class={style['button--auth0']} onClick={auth0Login}>Login with Auth0</Button>
				</div>
			}

			<h3>Google</h3>
			{isAuthenticated('google') ?
				<div>
					<Profile identityProvider="google" />
					<Button onClick={logout('google')}>Logout</Button>
				</div> :
				<div>
					<Button class={style['button--google']} onClick={googleLogin}>Login with Google</Button>
				</div>
			}

			<h3>Facebook</h3>
			{isAuthenticated('facebook') ?
				<div>
					<Profile identityProvider="facebook" />
					<Button onClick={logout('facebook')}>Logout</Button>
				</div> :
				<div>
					<Button class={style['button--facebook']} onClick={facebookLogin}>Login with Facebook</Button>
				</div>
			}
		</Page>
	);
}
