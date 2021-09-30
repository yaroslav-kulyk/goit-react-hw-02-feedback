import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={() => this.addGood()}>Good</button>
        <button onClick={() => this.addNeutral()}>Neutral</button>
        <button onClick={() => this.addBad()}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total feedbacks: {this.countTotalFeedback()}</p>
        <p>
          Positive feedbacks:
          {!isNaN(this.countPositiveFeedbackPercentage()) &&
            this.countPositiveFeedbackPercentage() + '%'}
        </p>
      </div>
    );
  }
}

export default App;
