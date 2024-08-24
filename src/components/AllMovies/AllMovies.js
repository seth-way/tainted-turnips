import './AllMovies.css';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';
import movieData from '../../data/movieData';

export default function AllMovies({ allMovies, handleClick }) {
  const { singleMovie } = movieData;
  const movies = Array(8).fill({ ...singleMovie });
  return (
    <>
      <HeroCarousel movies={movies} handleClick={handleClick}/>
      <MovieCardsContainer title='All Movies' movies={allMovies} handleClick={handleClick}/>
    </>
  );
}
