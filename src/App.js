import { Component } from 'react';
import Section from './components/feedback-widget/Section ';
import FeedbackOptions from './components/feedback-widget/FeedbackOptions';
import Statistics from './components/feedback-widget/Statistics ';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
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
      <Section title={'Please leave a feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.addFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
