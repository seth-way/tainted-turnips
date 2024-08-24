import './Slide.css';
import turnip from '../../assets/images/turnip.png';
import { normalizeTime } from '../../utils';

export default function Slide({ movie }) {
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
      <div className="show-info">
        <span className='rating'>
          <img src={turnip} alt='turnip icon' />
          <p> {average_rating.toFixed(1)}</p>
        </span>
        <span>, {normalizeTime(runtime)}</span>
        <span className="genres">{showGenres()}</span>
      </div>
    );
  };

  return (
    <div className='slide' style={{ backgroundImage: `url(${backdrop_path})` }}>
      <p className="tagline">{tagline}</p>
      <h2>{title}</h2>
      {showMovieInfo()}
      {/*<img className='backdrop' src={backdrop_path} alt={`${title} backdrop`} />*/}
    </div>
  );
}
