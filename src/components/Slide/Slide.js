import './Slide.css';
import turnip from '../../assets/images/turnip.png';
import { normalizeTime } from '../../utils';
import PropTypes from 'prop-types';

function Slide({ movie, handleClick, moreInfo }) {
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
      <p className='tagline'>{tagline}</p>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      {showMovieInfo()}
      {moreInfo && (
        <button className='more-info' onClick={() => handleClick(id)}>
          More Info...
        </button>
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
  handleClick: PropTypes.func,
  moreInfo: PropTypes.bool,
};

export default Slide;
