import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import $ from 'jquery';

import Game from "./Game";
import Navbar from "./Navbar";

import {questionAnswer, changeQuestion, submit, initQuestions} from './redux/actions';


class App extends Component {

  componentDidMount(){
      $.ajax({
        url: "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=c87faa80f2177717349b",

      })
      .done((data) =>{
        this.props.dispatch(initQuestions(data))
      });

      this.timeOut = setTimeout(() => {
        this.props.dispatch(submit(this.props.questions))}, 60000);
      
  
  }

  render() {
    console.log(this.props);
    return (
      <div>
          <Game question = {this.props.questions[this.props.currentQuestion]}
                currentQuestion = {this.props.currentQuestion}
                score = {this.props.score}
                finished = {this.props.finished}
                arrayQuestions = {this.props.questions}
                nQuestions = {this.props.questions.length}
                onQuestionAnswer = {(answer) => {
                  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                }}  
                onChangeQuestion = {(index) => {
                  this.props.dispatch(changeQuestion(index))  
                }} 
                onSubmit = {(questions) => {
                  this.props.dispatch(submit(questions))
                }}
                onInit = {(questions) => {
                  this.props.dispatch(initQuestions(questions))
                }}
                />            
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
