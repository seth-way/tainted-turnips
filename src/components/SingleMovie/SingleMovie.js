import './SingleMovie.css';
import { useState, useEffect } from 'react';
import Slide from '../Slide/Slide';
import { convertToCurrency } from '../../utils';
import PropTypes from "prop-types";
import ErrorMessage from "../Error /ErrorMessage";

 function SingleMovie({ movieId, handleClick }) {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    try {
      const movieRes = await fetch(URL + movieId);
        if (!movieRes.ok) {
            const error = new Error(movieRes.statusText)
            error.code = movieRes.status
            throw error;
        }
      const { movie } = await movieRes.json();
      setMovie(movie);
      const videosRes = await fetch(URL + movieId + '/videos');
        if (!videosRes.ok) {
            const error = new Error(videosRes.statusText)
            error.code = videosRes.status
            throw error;
        }
      const { videos } = await videosRes.json();
      setVideos(videos);
    } catch (err) {
        console.error(err)
      setError(err);
    }

  };

  useEffect(() => {
    if (movieId) {
      fetchMovie();
    } else {
      setMovie(null);
      setVideos([]);
    }
  }, [movieId]);

  if (error) return <ErrorMessage error={error}/>;
  if (!movie) return <h2>loading movie...</h2>;

  const { release_date, overview, budget, revenue } = movie;

  return (
    <section className='single-movie-view' onClick={handleClick}>
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
    </section>
  );
}
SingleMovie.propTypes ={
  movieId:PropTypes.number.isRequired,
  handleClick:PropTypes.func.isRequired
}
export default SingleMovie