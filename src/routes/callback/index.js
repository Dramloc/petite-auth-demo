import { h, Component } from 'preact';

import { handleAuthentication } from '../../lib/auth';
import Spinner from '../../components/spinner';

import style from './style.css';

export default class Callback extends Component {
	componentDidMount() {
		handleAuthentication();
	}

	render() {
		return (
			<div class={style.callback}>
				<Spinner />
			</div>
		);
	}
}
