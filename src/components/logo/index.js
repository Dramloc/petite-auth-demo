import { h, Component } from 'preact';
import classNames from 'classnames';

import style from './style.css';

export default class Logo extends Component {
	container = undefined;
	canvas = undefined;
	context = undefined;

	update = () => {
		const time = Date.now() / 1000 / 128;
		const width = 3;
		const height = 3;
		const sizeX = this.canvas.width / width;
		const sizeY = this.canvas.height / height;
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (let index = 0; index < width * height; index += 1) {
			const factor = Math.sin(time * (2 << index)) / 2;
			this.context.fillRect(((index % width) - (factor - 1) / 2) * sizeX, ((index / width | 0) - (factor - 1) / 2) * sizeY, sizeX * factor, sizeY * factor);
		}
		requestAnimationFrame(this.update);
	}

	componentDidMount() {
		const boundingClientRect = this.container.getBoundingClientRect();
		this.canvas.width = boundingClientRect.width;
		this.canvas.height = boundingClientRect.height;
		this.context = this.canvas.getContext('2d');
		this.context.fillStyle = '#FF5722';
		requestAnimationFrame(this.update);
	}

	render({ class: className, ...props }) {
		return (
			<div ref={container => this.container = container} class={classNames(style.logo, className)} {...props}>
				<canvas ref={canvas => this.canvas = canvas} />
			</div>
		);
	}
}
