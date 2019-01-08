import React from 'react';

import Button from "./Button";
import $ from 'jquery';

export default class Actionbar extends React.Component {
	
	render() {
		return (
			<div>
				<Button value={"Anterior"}
						onClick = { () => { this.props.onChangeQuestion(this.props.currentQuestion - 1) }}
						visible = { this.props.currentQuestion === 0 ? true : false } ></Button>
				<Button value={"Siguiente"}
						onClick = { () => { this.props.onChangeQuestion(this.props.currentQuestion + 1) }} 
						visible = { this.props.currentQuestion === this.props.nQuestions - 1  ? true : false }></Button>
				<Button value={"Submit"}
						onClick = { () => { this.props.onSubmit(this.props.arrayQuestions) }}
						visible = { false }></Button>
				<Button value = {"Reset"}
						 onClick = { () => { 
							$.ajax({
       						  url: "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=c87faa80f2177717349b",

     						 })
      						.done((data) =>{
      						  this.props.onInit(data)
      						});
      
     						this.timeOut = setTimeout(() => {
        						this.props.onSubmit(this.props.arrayQuestions)}, 60000);
     						 }}
     					
     						 
     					visible = { false }>	
     						</Button>			 	
			</div>	
		);
	}
}
