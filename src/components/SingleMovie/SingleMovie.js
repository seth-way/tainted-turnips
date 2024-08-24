import './SingleMovie.css';
import { useState, useEffect } from 'react';
import Slide from '../Slide/Slide';
import { convertToCurrency } from '../../utils';

export default function SingleMovie({ movieId, handleClick }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    try {
      const res = await fetch(URL + movieId);
      const data = await res.json();
      setMovie(data.movie);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (movieId) fetchMovie();
  }, [movieId]);

  if (error) return <h2>{`Error: ${error}`}</h2>;
  if (!movie) return <h2>loading movie...</h2>;

  const { release_date, overview, budget, revenue } = movie;

  return (
    <div className='single-movie-view' onClick={handleClick}>
      <Slide movie={movie} />
      <div className='single-movie-description'>
        <div className='overview'>
          <h4>Description</h4>
          <p className='single-overview'>{overview}</p>
        </div>
        <div className='mini-description'>
          <p>{release_date}</p>
          <p className='single-budget'>{convertToCurrency(budget)}</p>
          <p className='single-revenue'>{convertToCurrency(revenue)}</p>
        </div>
      </div>
    </div>
  );
}
