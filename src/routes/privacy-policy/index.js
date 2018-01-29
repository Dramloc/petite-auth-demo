import { h } from 'preact';

import Page from '../../components/page';
import Helmet from 'preact-helmet';

export default function PrivacyPolicy() {
	return (
		<Page>
			<Helmet title="Petite · Auth | Privacy policy" />
			<h1>Privacy policy</h1>

			<p>Some personal information are collected when using this demo. These information are use for the sole purpose of this demo and I will not use them anywhere else. If you want me to remove your profile from Auth0, please contact me at <a href="mailto:a.colmard@gmail.com" target="_blank" rel="noopener noreferrer">a.colmard@gmail.com</a>.</p>

			<p>You can check identity provider privacy policies to see how they use your information:</p>
			<ul>
				<li>Auth0: <a href="https://auth0.com/privacy" target="_blank" rel="noopener noreferrer">https://auth0.com/privacy</a></li>
				<li>Google: <a href="https://www.google.com/policies/privacy" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy</a></li>
				<li>Facebook: <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer">https://www.facebook.com/policy.php</a></li>
			</ul>

			<hr />

			<p>This Privacy Policy governs the manner in which Petite · Auth collects, uses, maintains and discloses information collected from users (each, a "User") of the https://petite-auth.surge.sh/ website ("Site").</p>

			<h3>Personal identification information</h3>
			<p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>

			<h3>Non-personal identification information</h3>
			<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>

			<h3>How we use collected information</h3>
			<p>Petite · Auth may collect and use Users personal information for the following purposes:</p>
			<ul>
				<li>
					<i>To run and operate our Site</i><br />
					We may need your information display content on the Site correctly.
				</li>
			</ul>

			<h3>How we protect your information</h3>
			<p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

			<h3>Sharing your personal information</h3>
			<p>We do not sell, trade, or rent Users personal identification information to others.</p>

			<h3>Compliance with children's online privacy protection act</h3>
			<p>Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.</p>

			<h3>Changes to this privacy policy</h3>
			<p>Petite · Auth has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>

			<h3>Your acceptance of these terms</h3>
			<p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes. This privacy policy was built <a href="https://privacypolicies.com/" target="_blank" rel="noopener noreferrer"> the web's favourite privacy policy generator</a>.</p>

			<h3>Contacting us</h3>
			<p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.</p>

			<p>This document was last updated on January 29, 2018</p>
		</Page>
	);
}
