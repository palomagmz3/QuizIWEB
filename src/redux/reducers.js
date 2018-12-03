import { combineReducers } from 'redux';

import { QUESTON_ASNWER } from './actions';

function score(state = 0, action = {}) {
	switch(action.type){
		default:
		  return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		default:
		  return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		default:
		  return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTON_ASNWER:
			return state.map((question, i) => {
				return { ...question, 
							userAnswer: action.payload.index === i ?
										action.payload.answer : question.userAnswer}

			})
		default:
		  return state;
	}
}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions

}));

export default GlobalState;