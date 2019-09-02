const React = require("react");
const styled = require("styled-components").default;

const { Link } = require("react-router-dom");

const List = require("./list.jsx");

const PageSelector = styled(class PageSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	async load(prevProps) {
		if (prevProps.id === this.props.id) return;

		this.setState({
			loaded: false,
		});

		await this.props.source.fetchNav();

		this.setState({
			loaded: true,
		});
	}

	componentDidMount() {
		this.load({});
	}

	componentDidUpdate(prevProps) {
		this.load(prevProps);
	}

	render() {
		if (!this.props.source) {
			return <div className={this.props.className}>Select a source...</div>;
		} else if (!this.state.loaded) {
			return <div className={this.props.className}>Loading...</div>;
		}

		return <div className={this.props.className}>
			<List header="Pages">
				{this.props.source.nav.map(page => {
					return <Link key={page.id} to={`/docs/${this.props.id}/${page.id}`} style={{
						color: page.id === this.props.page && "#0406a2",
					}}>
						{page.title}
					</Link>;
				})}
			</List>;
		</div>;
	}
})`
	background-color: #bbb;
	flex: 2;
`;
module.exports = PageSelector;