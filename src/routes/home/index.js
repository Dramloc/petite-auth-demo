import { h } from 'preact';
import Helmet from 'preact-helmet';

import { login as auth0Login } from '../../lib/auth0';
import { login as facebookLogin } from '../../lib/facebook';
import { login as googleLogin } from '../../lib/google';
import { logout, isAuthenticated } from '../../lib/auth';
import Button from '../../components/button';
import Logo from '../../components/logo';
import Page from '../../components/page';
import Profile from '../../components/profile';

import style from './style.css';

export default function Home() {
	return (
		<Page class={style.home}>
			<Helmet title="Petite · Auth" />
			<div class={style.home__header}>
				<h1>Petite · Auth</h1>
				<Logo class={style.home__logo} />
			</div>
			<p>🔒 Tiny (429B) JavaScript OAuth2 client</p>

			<Button class={style['button--getting-started']} href="https://github.com/Dramloc/petite-auth">Getting started</Button>

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
