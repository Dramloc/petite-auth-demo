import { h } from 'preact';
import classNames from 'classnames';

import style from './style.css';

export default function Spinner({ class: className, ...props }) {
	return (
		<div class={classNames(style.spinner, className)} {...props}>
			<div class={style.spinner__circle} />
		</div>
	);
}
