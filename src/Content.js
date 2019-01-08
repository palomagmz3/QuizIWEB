import React from 'react';

import Question from "./Question";
import Answer from "./Answer";

export default class Content extends React.Component {
	render() {
		let tip = this.props.question.tips.map((tipsValues) => {

				return ( this.props.question.tips===[] ? "no tips" : <li>{tipsValues}</li>);
			
		})

		return (
			<div> 
				<Question question = { this.props.question } 
						  score = { this.props.score }
						  finished = { this.props.finished }/>
				<Answer question = { this.props.question } 
						onQuestionAnswer = { this.props.onQuestionAnswer}/>
				{tip}
				<img src = { this.props.question.attachment.url } />
			</div>
		);
	}
}