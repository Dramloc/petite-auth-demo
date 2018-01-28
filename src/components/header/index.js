import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

export default function Header() {
	return (
		<header class={style.header}>
			<h1><Link href="/">petite &middot; auth</Link></h1>
		</header>
	);
}
