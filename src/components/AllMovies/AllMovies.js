import './AllMovies.css';
import { useState, useEffect } from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';
import { getRecentMovies, getMoviesData } from '../../utils/movies';

export default function AllMovies({ allMovies, handleClick }) {
  const [carouselMovies, setCarousel] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCarouselMovies = async () => {
      const recentMovies = getRecentMovies(allMovies);
      try {
        const movies = await getMoviesData(recentMovies);
        setCarousel(movies);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    if (allMovies.length) getCarouselMovies();
  }, [allMovies]);
  return (
    <>
      {!error && (
        <HeroCarousel movies={carouselMovies} handleClick={handleClick} />
      )}
      <MovieCardsContainer
        title='All Movies'
        movies={allMovies}
        handleClick={handleClick}
      />
    </>
  );
}
