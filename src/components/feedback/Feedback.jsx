import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, percentagePositive }) => {
  return (
    <div className={styles.feedback}>
      <h2>Feedback statistics:</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {isNaN(percentagePositive) ? 0 : percentagePositive}%</p>
    </div>
  );
};

export default Feedback;
