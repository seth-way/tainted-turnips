import './AllMovies.css';
import MovieCardsContainer from '../MovieCardsContainer/MovieCardsContainer';

export default function AllMovies({allMovies}) {
  return <MovieCardsContainer heading="All Movies" movies={allMovies}/>;
}
