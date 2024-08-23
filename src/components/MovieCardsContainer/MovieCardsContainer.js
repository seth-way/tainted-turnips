import './MovieCardsContainer.css';
import MovieCard from '../MovieCard/MovieCard';


export default function MovieCardsContainer({ title, movies }) {
  return (
    <section className='movie-cards-container'>
      <h2>{title}</h2>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
