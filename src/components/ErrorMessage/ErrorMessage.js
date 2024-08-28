import './ErrorMessage.css';
import {useParams} from 'react-router-dom'

function ErrorMessage() {
  const {code} = useParams();
  return (
    <section>
      <h2>{`Im sorry there is a ${code} Error`}</h2>
    </section>
  );
}

export default ErrorMessage;
