import './MovieCardsContainer.css';
import MovieCard from '../MovieCard/MovieCard';


export default function MovieCardsContainer({ title, movies, handleClick }) {
  return (
    <section className='movie-cards-container'>
      <h2>{title}</h2>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} handleClick={handleClick}/>
        ))}
      </div>
    </section>
  );
}
