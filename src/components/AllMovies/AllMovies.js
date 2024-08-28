import './AllMovies.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import MovieCardCarousel from '../MovieCardCarousel/MovieCardCarousel';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';
import LoadingSlide from '../LoadingSlide/LoadingSlide';
import {
  getTopRatedMovies,
  getRecentMovies,
  getMoviesData,
} from '../../utils/movies';
import PropTypes from 'prop-types';
function AllMovies({ allMovies }) {
  const [carouselMovies, setCarousel] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCarouselMovies = async () => {
      const recentMovies = getRecentMovies(allMovies);
      try {
        const movies = await getMoviesData(recentMovies);
        setCarousel(() => movies);
      } catch (err) {
        console.error(err);
        navigate(`/error/${err.code || err.statusCode}`);
      }
    };

    if (allMovies.length) {
      getCarouselMovies();
      setTopMovies(getTopRatedMovies(allMovies));
    }
  }, [allMovies]);

  return (
    <section id='all-movies'>
      {carouselMovies.length ? (
        <HeroCarousel movies={carouselMovies} />
      ) : (
        <LoadingSlide />
      )}
      {allMovies.length ? (
        <>
          <MovieCardCarousel type='top 10' movies={topMovies} />
          <MovieCardsContainer title='All Movies' movies={allMovies} />
        </>
      ) : (
        <>
          <LoadingSlide />
          <LoadingSlide />
        </>
      )}
    </section>
  );
}

AllMovies.propTypes = {
  allMovies: PropTypes.array.isRequired,
};

export default AllMovies;
