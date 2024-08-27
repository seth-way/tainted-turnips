import './MovieCardsContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

function MovieCardsContainer({ title, movies, handleClick }) {
  return (
    <section className='movie-cards-container'>
      <h2>{title}</h2>
      <div>
        {movies.map((movie, idx) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleClick={handleClick}
            sticker={idx + 1}
          />
        ))}
      </div>
    </section>
  );
}

MovieCardsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MovieCardsContainer;
