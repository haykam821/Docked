const React = require("react");
const styled = require("styled-components").default;

const TextLine = require("./text-line.jsx");

const List = styled(class List extends React.Component {
	render() {
		return <div className={this.props.className}>
			<TextLine>{this.props.header}</TextLine>
			<ul>
				{this.props.children.map((child, index) => {
					return <li key={index}>
						{child}
					</li>;
				})}
			</ul>
		</div>
	}
})`
	${TextLine} {
		color: #333;
		font-size: 11px;
	}

	& > ul {
		list-style: none;
		margin-top: 0.5em;
		margin-left: 0;
		padding-left: 0;

		a {
			color: #555;
			text-decoration: none;
			font-variant: small-caps;
			font-weight: bold;
		}
	}
`;
module.exports = List;