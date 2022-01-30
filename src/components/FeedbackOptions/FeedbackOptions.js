import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback, name, options }) {
  return (
    <button type="button" className={s.btn} onClick={onLeaveFeedback} name={name}>
      {options}
    </button>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
