import Notification from './Notification';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2>Statistics</h2>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total feedbacks: {total}</p>
          <p>Positive feedbacks: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default Statistics;
