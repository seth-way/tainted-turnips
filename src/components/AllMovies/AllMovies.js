import './AllMovies.css';
import { useState, useEffect, Suspense } from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';
import LoadingSlide from '../LoadingSlide/LoadingSlide';
import { getRecentMovies, getMoviesData } from '../../utils/movies';
import PropTypes from 'prop-types';
function AllMovies({ allMovies, handleClick }) {
  const [carouselMovies, setCarousel] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCarouselMovies = async () => {
      const recentMovies = getRecentMovies(allMovies);
      try {
        const movies = await getMoviesData(recentMovies);
        setCarousel(() => movies);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };

    if (allMovies.length) getCarouselMovies();
  }, [allMovies]);

  return (
    <section id="all-movies">
      {!error &&
        (carouselMovies.length ? (
          <HeroCarousel movies={carouselMovies} handleClick={handleClick} />
        ) : (
          <LoadingSlide />
        ))}
      {allMovies.length ? (
        <MovieCardsContainer
          title='All Movies'
          movies={allMovies}
          handleClick={handleClick}
        />
      ) : (
        <>
          <LoadingSlide />
          <LoadingSlide />
          <LoadingSlide />
        </>
      )}
    </section>
  );
}

AllMovies.propTypes = {
  allMovies: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AllMovies;
