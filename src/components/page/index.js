import { h } from 'preact';
import classNames from 'classnames';

import style from './style.css';

export default function Page({ class: className, children, ...props }) {
	return (
		<div class={classNames(style.page, className)} {...props}>{children}</div>
	);
}
