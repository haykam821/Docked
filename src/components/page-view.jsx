const React = require("react");
const styled = require("styled-components").default;

const PageView = styled(class PageView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	async load(prevProps) {
		if (prevProps.page === this.props.page) return;

		this.setState({
			loaded: false,
		});

		await this.props.source.fetchPage(this.props.page);

		this.setState({
			loaded: true,
		});
	}

	componentDidMount() {
		return this.load({});
	}

	componentDidUpdate(prevProps) {
		return this.load(prevProps);
	}

	render() {
		if (!this.props.source || !this.props.id) {
			return <div className={this.props.className}>Select a source...</div>;
		} else if (!this.props.page) {
			return <div className={this.props.className}>Select a page...</div>;
		} else if (!this.state.loaded) {
			return <div className={this.props.className}>Loading...</div>;
		}
		
		return <div className={this.props.className}>
			<pre>
				{this.props.source.pages[this.props.page]}
			</pre>
		</div>;
	}
})`
	background-color: #ddd;
	flex: 8;
`;
module.exports = PageView;