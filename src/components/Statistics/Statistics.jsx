import s from '../Statistics/Statistics.module.css';
import React from 'react';

import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li className={s.item}>
        <p className={s.textG}>Good: {good}</p>
      </li>
      <li className={s.item}>
        <p className={s.textN}>Neutral: {neutral}</p>
      </li>
      <li className={s.item}>
        <p className={s.textB}>Bad:{bad}</p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Total: {total}</p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
