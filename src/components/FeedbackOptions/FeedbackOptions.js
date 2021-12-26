import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.btnList}>
      {Object.keys(options).map(type => (
        <li key={type} className={s.btnItem}>
          <button type="button" onClick={() => onLeaveFeedback(type)} className={s.btn}>
            {type}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
