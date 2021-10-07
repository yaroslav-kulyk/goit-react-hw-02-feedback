import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.options}>
      {Object.keys(options).map(option => {
        return (
          <button
            key={option}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
