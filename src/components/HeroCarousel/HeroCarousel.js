import './HeroCarousel.css';
import { Carousel } from 'nuka-carousel';
import Slide from '../Slide/Slide';

export default function HeroCarousel({ movies }) {
  return (
    <div class='carousel'>
      <Carousel showDots>
        {movies.map(movie => (
          <Slide movie={movie} />
        ))}
      </Carousel>
    </div>
  );
}
