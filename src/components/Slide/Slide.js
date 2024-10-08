import './Slide.css';
import { Link } from 'react-router-dom';
import turnip from '../../assets/images/turnip.png';
import { normalizeTime } from '../../utils';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Slide({ movie, moreInfo }) {
  if (!movie) return <></>;

  const { id, title, backdrop_path, average_rating, genres, runtime, tagline } =
    movie;
  const showGenres = () => {
    const length = genres.length;
    if (!length) return '';
    var result = ', ';
    if (length === 1) return result + genres[0];
    if (length === 2) return result + genres.join(' & ');
    result += genres.slice(0, length - 1).join(', ');
    result += ' & ' + genres[length - 1];
    return result;
  };

  const showMovieInfo = () => {
    return (
      <div className='show-info'>
        <span className='rating'>
          <img src={turnip} alt='turnip icon' />
          <p> {average_rating.toFixed(1)}</p>
        </span>
        <span>, {normalizeTime(runtime)}</span>
        <span className='genres'>{showGenres()}</span>
      </div>
    );
  };

  return (
    <div className='slide' style={{ backgroundImage: `url(${backdrop_path})` }}>
      {tagline.length > 0 ? <p className='tagline'>{tagline}</p> : ''}
      <div className='title'>
        <h2>{title}</h2>
      </div>
      {showMovieInfo()}
      {moreInfo && (
        <Link to={`/movies/${id}`}>
          <motion.button
            className='more-info'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring' }}
          >
            More Info...
          </motion.button>
        </Link>
      )}
    </div>
  );
}

Slide.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
  }).isRequired,
  moreInfo: PropTypes.bool,
};

export default Slide;
