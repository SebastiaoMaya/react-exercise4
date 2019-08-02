import React, { Component } from 'react';
import Equation from '../equation/Equation';
import Score from '../score/Score';

export default class Game extends Component {
  constructor(props) {
    super(props);
    const {
      value1,
      value2,
      value3,
      rngForAnswer
    } = this.generateEquationNumbers();

    this.state = {
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: rngForAnswer + value1 + value2 + value3,
      numQuestions: 0,
      numCorrect: 0
    };
  }

  generateRandomValue = () => Math.floor(Math.random() * 100);

  randomDificultyForAnswer = difficulty =>
    Math.floor(Math.random() * difficulty);

  generateEquationNumbers = () => ({
    value1: this.generateRandomValue(),
    value2: this.generateRandomValue(),
    value3: this.generateRandomValue(),
    rngForAnswer: this.randomDificultyForAnswer(3)
  });

  calculateScore = buttonBoolean => {
    const {
      value1,
      value2,
      value3,
      proposedAnswer,
      numQuestions,
      numCorrect
    } = this.state;

    const isProposedAnswerTrue = value1 + value2 + value3 === proposedAnswer;

    const newValues = this.generateEquationNumbers();

    this.setState({
      value1: newValues.value1,
      value2: newValues.value2,
      value3: newValues.value3,
      proposedAnswer:
        newValues.rngForAnswer +
        newValues.value1 +
        newValues.value2 +
        newValues.value3,
      numQuestions: numQuestions + 1,
      numCorrect: numCorrect + (isProposedAnswerTrue === buttonBoolean)
    });
  };

  render() {
    const {
      value1,
      value2,
      value3,
      proposedAnswer,
      numQuestions,
      numCorrect
    } = this.state;
    return (
      <div className='game'>
        <h2>Mental Math</h2>
        <Equation
          value1={value1}
          value2={value2}
          value3={value3}
          proposedAnswer={proposedAnswer}
        />
        <button onClick={() => this.calculateScore(true)}>True</button>
        <button onClick={() => this.calculateScore(false)}>False</button>
        <Score numQuestions={numQuestions} numCorrect={numCorrect} />
      </div>
    );
  }
}
