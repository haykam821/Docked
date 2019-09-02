const React = require("react");

const { Switch, HashRouter: Router, Route, Redirect } = require("react-router-dom");

const styled = require("styled-components").default;

const DocsSelector = require("./docs-selector.jsx");
const PageSelector = require("./page-selector.jsx");
const PageView = require("./page-view.jsx");

const sources = require("../sources");

const App = styled(class App extends React.Component {
	render() {
		return <Router>
			<div className={this.props.className}>
				<Switch>
					<Route path="/docs/:id?/:page?" render={routeProps => {
						const props = {
							...routeProps,
							...routeProps.match.params,
							source: sources[routeProps.match.params.id],
						};

						return <React.Fragment>
							<DocsSelector {...props} />
							<PageSelector {...props} />
							<PageView {...props} />
						</React.Fragment>;
					}} />
					<Route render={() => <Redirect to="/docs" />} />
				</Switch>
			</div>
		</Router>;
	}
})`
	width: 100%;
	height: 100%;

	display: flex;
	& > div {
		height: 100%;
		padding: 16px;
		font-family: sans-serif;
		overflow: hidden;
	}
`;
module.exports = App;