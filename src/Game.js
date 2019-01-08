import React from 'react';

import Actionbar from "./Actionbar";
import Content from "./Content";

export default class Game extends React.Component {


	render() {
		return (

			<div> 
				<Content question = { this.props.question } 
						 onQuestionAnswer = { this.props.onQuestionAnswer }
						 score = { this.props.score }
						 finished = { this.props.finished }/>
				<Actionbar question = { this.props.question }
						   arrayQuestions = { this.props.arrayQuestions }
						   currentQuestion = { this.props.currentQuestion }
						   nQuestions = { this.props.nQuestions }
						   onChangeQuestion = { this.props.onChangeQuestion }
						   onSubmit = { this.props.onSubmit }
						   onInit = { this.props.onInit }
						   />
			</div>
				
		);
	}
}