import { h } from 'preact';
import { Router } from 'preact-router';

import Callback from '../routes/callback';
import Header from './header';
import Home from '../routes/home';

export default function App() {
	return (
		<div id="app">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
			<Header />
			<Router>
				<Home path="/" />
				<Callback path="/callback" />
			</Router>
		</div>
	);
}
