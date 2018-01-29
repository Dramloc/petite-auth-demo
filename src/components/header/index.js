import { h } from 'preact';
import { Link } from 'preact-router/match';
import Logo from '../logo';

import style from './style.css';

export default function Header() {
	return (
		<header class={style.header}>
			<Logo class={style.header__logo} />
			<Link href="/">petite &middot; auth</Link>
		</header>
	);
}
