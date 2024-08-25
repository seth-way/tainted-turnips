import './ErrorMessage.css';
import PropTypes from 'prop-types';

function ErrorMessage({ error }) {
  return (
    <section>
      <h2>{`Im sorry there is a ${error.code} Error`}</h2>
    </section>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorMessage;
