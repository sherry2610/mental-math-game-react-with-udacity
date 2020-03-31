import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

//const value1 = Math.floor(Math.random() * 100);
//const value2 = Math.floor(Math.random() * 100);
//const value3 = Math.floor(Math.random() * 100);
//const proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
//const numQuestions = 0;
//const numCorrect = 0;

class App extends Component {
 
  
  
  
state = {
    numQuestions:0,
    numCorrect:0,
  }
 handleAnswer = answerWasCorrect => {
  if(answerWasCorrect){
  this.setState(currState=>({
  	numCorrect:currState.numCorrect + 1
  }))
  }
this.setState(currState=>({
  	numQuestions:currState.numQuestions + 1
  }))
  
   
 }


  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game 
    		handleAnswer={this.handleAnswer}			
		/>
		<Score 
			numQuestions={this.state.numQuestions}
			numCorrect={this.state.numCorrect}
			/>
			
      </div>
    );
  }
}

export default App;
