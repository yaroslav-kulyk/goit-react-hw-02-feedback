import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.options}>
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
