import './AllMovies.css';
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import MovieCardCarousel from '../MovieCardCarousel/MovieCardCarousel';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';
import LoadingSlide from '../LoadingSlide/LoadingSlide';
import { getRecentMovies, getMoviesData } from '../../utils/movies';
import PropTypes from 'prop-types';
function AllMovies({ allMovies }) {
  const [carouselMovies, setCarousel] = useState([]);
  const navigate = useNavigate();
  //const [error, setError] = useState(null);

  useEffect(() => {
    const getCarouselMovies = async () => {
      const recentMovies = getRecentMovies(allMovies);
      try {
        const movies = await getMoviesData(recentMovies);
        setCarousel(() => movies);
      } catch (err) {
        console.error(err);
        navigate(`/error/${err.code || err.statusCode}`)
      }
    };

    if (allMovies.length) getCarouselMovies();
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
          <MovieCardCarousel
            type='top 10'
            movies={allMovies.slice(0, 10)}
          />
          <MovieCardsContainer
            title='All Movies'
            movies={allMovies}
          />
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
