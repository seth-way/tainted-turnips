import './MovieCardCarousel.css';
import MovieCard from '../MovieCard/MovieCard';
import { Carousel, useCarousel } from 'nuka-carousel';
import CustomArrows from '../CustomArrows/CustomArrows';

function MovieCardCarousel({ movies, type, handleClick }) {
  const noSpaces = type.split(' ').join('-');
  return (
    <section className='card-carousel'>
      <h2>{type}</h2>
      <Carousel
        showArrows
        //scrollDistance='slide'
        arrows={<CustomArrows />}
        id={`${noSpaces}-card-carousel`}
      >
        {movies.map((movie, idx) => (
          <MovieCard
            key={`${noSpaces}-${movie.id}-card`}
            movie={movie}
            handleClick={handleClick}
            sticker={idx + 1}
          />
        ))}
        {/* <div className='movie-card'></div> */}
      </Carousel>
    </section>
  );
}

export default MovieCardCarousel;
