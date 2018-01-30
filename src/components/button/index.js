import { h } from 'preact';
import classNames from 'classnames';

import style from './style.css';

export default function Button({ class: className, children, ...props }) {
	if (props.href) {
		return (
			<a class={classNames(style.button, className)} {...props}>
				<div class={style.button__overlay}>{children}</div>
			</a>
		);
	}
	return (
		<button class={classNames(style.button, className)} {...props}>
			<div class={style.button__overlay}>{children}</div>
		</button>
	);
}
