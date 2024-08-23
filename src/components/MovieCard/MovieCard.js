import './MovieCard.css';
import turnip from '../../assets/images/turnip.png';
import { ReactComponent as TurnipSVG } from '../../assets/images/turnip.svg';

export default function MovieCard({ movie }) {
  const { id, poster_path, title, average_rating } = movie;
  console.log(poster_path);
  const handleClick = () => {
    console.log('click handled');
  };
  return (
    <div className='movie-card' onClick={handleClick}>
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
