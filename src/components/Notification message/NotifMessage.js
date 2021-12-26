import PropTypes from 'prop-types';
import s from './NotifMessage.module.css';

function NotifMessage({ message }) {
  return <p className={s.text}>{message}</p>;
}

NotifMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotifMessage;
