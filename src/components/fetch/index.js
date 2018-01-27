import { h, Component } from 'preact';

export default class Fetch extends Component {
	state = { loading: true };

	update() {
		let { url, options = {}, as = 'json' } = this.props;
		this.setState({ loading: true, error: null });
		fetch(url, options)
			.then(r => r[as]())
			.then(data => this.setState({ loading: false, data }))
			.catch(error => this.setState({ loading: false, data: null, error }));
	}

	componentDidMount() {
		this.update();
	}

	componentDidUpdate(prevProps) {
		if (this.props.url !== prevProps.url) {
			this.update();  // fetch changed url
		}
	}

	render(props, state) {
		// just pass all state to the child as props
		return props.children[0](state);
	}
}
