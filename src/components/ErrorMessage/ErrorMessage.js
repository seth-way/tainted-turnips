import './ErrorMessage.css';
import { useParams } from 'react-router-dom';

function ErrorMessage() {
  const { code } = useParams();
  return (
    <section className="error">
      <h2>{`We're sorry!!! There was a ${code} Error`}</h2>
    </section>
  );
}

export default ErrorMessage;
