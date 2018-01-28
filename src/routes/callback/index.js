import { h, Component } from 'preact';

import { handleAuthentication } from '../../lib/auth';
import Page from '../../components/page';
import Spinner from '../../components/spinner';

import style from './style.css';

export default class Callback extends Component {
	componentDidMount() {
		handleAuthentication();
	}

	render() {
		return (
			<Page>
				<Spinner class={style.callback__spinner} />
			</Page>
		);
	}
}
