import './MovieCard.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import turnip from '../../assets/images/turnip.png';
import PropTypes from 'prop-types';

function MovieCard({ movie,sticker }) {
  const { id, poster_path, title, average_rating } = movie;

  return (
    <Link to={`/movies/${id}`} className='movie-card'>
      <div className='card-inside'>
        <div className='img-wrapper'>
          <motion.img
            src={poster_path}
            alt={`${title} movie poster`}
            whileHover={{ scale: 1.07 }}
            transition={{ type: 'spring' }}
          />
        </div>
        <div className='rating'>
          <img src={turnip} alt='turnip icon' />
          <p> {average_rating.toFixed(1)}</p>
        </div>
        <div className='title'>
          <h3>{title}</h3>
        </div>
      </div>
      <h4 className='sticker' sticker={sticker}>
          {sticker}
        </h4>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
  }).isRequired,
  sticker: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MovieCard;
