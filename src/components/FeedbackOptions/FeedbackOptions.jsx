import s from '../FeedbackOptions/FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
            className={s.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
