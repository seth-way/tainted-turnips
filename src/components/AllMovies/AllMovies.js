import './AllMovies.css';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';

export default function AllMovies({ allMovies }) {
  return <MovieCardsContainer title='All Movies' movies={allMovies} />;
}
