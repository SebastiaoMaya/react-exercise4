import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    const { numQuestions, numCorrect } = this.props;
    return (
      <p className='text'>
        Your Score: {numCorrect}/{numQuestions}
      </p>
    );
  }
}
