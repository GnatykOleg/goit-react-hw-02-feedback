import s from '../FeedbackOptions/FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  //   const { bad, good, neutral } = options;
  //   return (
  //     <div>
  //       <button
  //         className={s.button}
  //         type="button"
  //         name="good"
  //         value={options['good']}
  //         onClick={onLeaveFeedback}
  //       >
  //         Good
  //       </button>
  //       <button
  //         className={s.button}
  //         type="button"
  //         name="neutral"
  //         value={options['neutral']}
  //         onClick={onLeaveFeedback}
  //       >
  //         Neutral
  //       </button>
  //       <button
  //         className={s.button}
  //         type="button"
  //         name="bad"
  //         value={options['bad']}
  //         onClick={onLeaveFeedback}
  //       >
  //         Bad
  //       </button>
  //     </div>
  //   );
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
