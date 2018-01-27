import { h } from 'preact';

import style from './style.css';

export default function Spinner() {
	return (
		<div class={style.spinner}>
			<div class={style.spinner__circle} />
		</div>
	);
}
