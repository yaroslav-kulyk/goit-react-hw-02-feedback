function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button key={option} name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
