import './MovieCard.css';
import turnip from '../../assets/images/turnip.png';
import { ReactComponent as TurnipSVG } from '../../assets/images/turnip.svg';
import PropTypes from "prop-types";
import HeroCarousel from "../HeroCarousel/HeroCarousel";

 function MovieCard({ movie, handleClick }) {
  const { id, poster_path, title, average_rating } = movie;
  return (
    <div className='movie-card' onClick={() => handleClick(id)}>
      <div className='card-inside'>
        <div className='img-wrapper'>
          <img src={poster_path} alt={`${title} movie poster`} />
        </div>
        <div className='rating'>
          <img src={turnip} alt='turnip icon' />
          <p> {average_rating.toFixed(1)}</p>
        </div>
        <div className='title'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id:PropTypes.number.isRequired,
    poster_path:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    average_rating:PropTypes.number.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
}
export default MovieCard;