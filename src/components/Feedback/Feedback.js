import React, { Component } from 'react';
import s from './Feedback.module.css';

import PropTypes from 'prop-types';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = event => {
    this.setState(add => {
      return { good: add.good + 1 };
    });
  };
  addNeutral = event => {
    this.setState(add => {
      return { neutral: add.neutral + 1 };
    });
  };
  addBad = event => {
    this.setState(add => {
      return { bad: add.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <section className={s.section}>
        <h1 className={s.title}>Please leave feedback</h1>
        <button className={s.button} type="button" onClick={this.addGood}>
          Good
        </button>
        <button className={s.button} type="button" onClick={this.addNeutral}>
          Neutral
        </button>
        <button className={s.button} type="button" onClick={this.addBad}>
          Bad
        </button>
        <h2 className={s.title}>Statistics</h2>
        <ul>
          <li className={s.item}>
            <p className={s.textG}>Good: {good}</p>
          </li>
          <li className={s.item}>
            <p className={s.textN}>Neutral: {neutral}</p>
          </li>
          <li className={s.item}>
            <p className={s.textB}>Bad: {bad}</p>
          </li>
          <li className={s.item}>
            <p className={s.text}>Total: {this.countTotalFeedback()} </p>
          </li>
          <li className={s.item}>
            <p className={s.text}>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
