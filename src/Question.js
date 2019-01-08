import React from 'react';
export default class Question extends React.Component {
	render() {
		
		return (
			<div> 

				<h1> {this.props.question.question} </h1>

				<div>
					<h2 display = {this.props.finished}> Has acertado {this.props.score} preguntas </h2>
				</div>	 

			</div>
		);
	}
}