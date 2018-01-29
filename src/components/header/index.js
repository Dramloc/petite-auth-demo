import { h } from 'preact';
import { Link } from 'preact-router/match';
import Logo from '../logo';

import style from './style.css';

export default function Header() {
	return (
		<header class={style.header}>
			<Link href="/"><Logo class={style.header__logo} /></Link>
			<Link href="/" class={style.link} activeClassName={style['link--active']}>petite &middot; auth</Link>
		</header>
	);
}
