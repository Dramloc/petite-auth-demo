import { h } from 'preact';

import Page from '../../components/page';
import Helmet from 'preact-helmet';

export default function PrivacyPolicy() {
	return (
		<Page>
			<Helmet title="Petite · Auth | Privacy policy" />
			<h1>Privacy policy</h1>
		</Page>
	);
}
