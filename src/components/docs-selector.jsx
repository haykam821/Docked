const React = require("react");
const styled = require("styled-components").default;

const { Link } = require("react-router-dom");

const List = require("./list.jsx");

const sources = require("../sources");

const DocsSelector = styled(class DocsSelector extends React.Component {
	render() {
		return <div className={this.props.className}>
			<List header="All Sources">
				{Object.entries(sources).map(([id, source]) => {
					return <Link key={id} to={"/docs/" + id} style={{
						color: id === this.props.id && "#0406a2",
					}}>
						{source.name}
					</Link>
				})}
			</List>
		</div>;
	}
})`
	background-color: #999;
	flex: 2;
	
	
`;
module.exports = DocsSelector;