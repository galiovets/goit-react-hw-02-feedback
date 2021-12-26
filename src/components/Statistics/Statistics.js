import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Fragment>
      <h2 className={s.title}>statistics</h2>
      <ul className={s.statList}>
        <li className={s.statItem}>good: {good}</li>
        <li className={s.statItem}>neutral: {neutral}</li>
        <li className={s.statItem}>bad: {bad}</li>
        <li className={s.statItem}>total: {total}</li>
        <li className={s.statItem}>positive feedback: {total === 0 ? '0' : positivePercentage}%</li>
      </ul>
    </Fragment>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
