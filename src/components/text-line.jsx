const React = require("react");
const styled = require("styled-components").default;

const TextLine = styled(class TextLine extends React.Component {
	render() {
		return <div className={this.props.className}>
			{this.props.children}
		</div>;
	}
})`
	text-align: center;
	text-transform: uppercase;

	display: flex;
	align-items: center;
	flex-basis: 100%;
	width: 100%;

	&::before, &::after {
		content: "";
		flex-grow: 1;
		background: rgba(0, 0, 0, 0.35);
		height: 1px;
		font-size: 0px;
		line-height: 0px;
		margin: 0;
	}
	&::before {
		margin-right: 2px;
	}
	&::after {
		margin-left: 2px;
	}
`;
module.exports = TextLine;