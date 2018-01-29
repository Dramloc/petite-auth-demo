import { h } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import Callback from '../routes/callback';
import Header from './header';
import Home from '../routes/home';
import PrivacyPolicy from '../routes/privacy-policy';

export default function App() {
	return (
		<div id="app">
			<Helmet link={[{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' }]} />
			<link rel="stylesheet" href="" />
			<Header />
			<Router>
				<Home path="/" />
				<Callback path="/callback" />
				<PrivacyPolicy path="/privacy-policy" />
			</Router>
		</div>
	);
}
