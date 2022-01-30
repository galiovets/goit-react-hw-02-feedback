import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import NotifMessage from './components/Notification message';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const name = evt.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options="Good" name="good" />
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options="Neutral" name="neutral" />
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options="Bad" name="bad" />
        {this.countTotalFeedback() === 0 ? (
          <NotifMessage message="There is no feedback yet" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
