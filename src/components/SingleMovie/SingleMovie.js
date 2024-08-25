import './SingleMovie.css';
import { useState, useEffect } from 'react';
import Slide from '../Slide/Slide';
import Videos from '../Videos/Videos';
import { convertToCurrency, normalizeDate } from '../../utils';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function SingleMovie({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    try {
      const movieRes = await fetch(URL + movieId);
      if (!movieRes.ok) {
        const error = new Error(movieRes.statusText);
        error.code = movieRes.status;
        throw error;
      }
      const { movie } = await movieRes.json();
      setMovie(movie);
      const videosRes = await fetch(URL + movieId + '/videos');
      if (!videosRes.ok) {
        const error = new Error(videosRes.statusText);
        error.code = videosRes.status;
        throw error;
      }
      const { videos } = await videosRes.json();
      setVideos(videos);
    } catch (err) {
      console.error(err);
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

  if (error) return <ErrorMessage error={error} />;
  if (!movie) return <h2>loading movie...</h2>;

  const { title, release_date, overview, budget, revenue } = movie;
  console.log('rev <><>', revenue);
  console.log('budget <><>', budget);
  return (
    <section className='single-movie-view'>
      <Slide movie={movie} />
      <Videos videos={videos} title={title} />
      <div className='movie-info'>
        <div className='info-content'>
          <h3>Description</h3>
          <p className='single-overview'>{overview}</p>
        </div>
        <div>
          <div className='info-content'>
            <h3>Release Date</h3>
            <p>{normalizeDate(release_date)}</p>
          </div>
          {budget > 0 && revenue > 0 && (
            <div className='info-content'>
              <h3>Box Office</h3>
              <ul>
                <li>
                  <h4>Budget</h4>
                  <p>{convertToCurrency(budget)}</p>
                </li>
                <li>
                  <h4>Revenue</h4>
                  <p>{convertToCurrency(revenue)}</p>
                </li>
                <li>
                  <h4>Profit</h4>
                  <p>{convertToCurrency(revenue - budget)}</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

SingleMovie.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default SingleMovie;
