import React from 'react';

const buttonStyle = {
	height: "25px",
	width: "75px"
}

export default class Button extends React.Component {
	render() {
		return (
			<button onClick = {this.props.onClick}
					style = {buttonStyle}
					disabled = {this.props.visible}>{this.props.value}
					</button>
		);
	}
}