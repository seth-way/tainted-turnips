import './HeroCarousel.css';
import { Carousel, useCarousel } from 'nuka-carousel';
import Slide from '../Slide/Slide';

export const CustomDots = () => {
  const { totalPages, currentPage, goToPage } = useCarousel();

  const className = index => {
    let value = 'dot';
    if (currentPage === index) {
      value += ' current';
    }
    return value;
  };

  return (
    <div className='nav-dots'>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index)}
          className={className(index)}
        />
      ))}
    </div>
  );
};

export default function HeroCarousel({ movies }) {
  return (
    <div class='carousel'>
      <Carousel
        showDots
        autoplay
        dots={<CustomDots />}
        wrapMode='wrap'
        autoplayInterval={2500}
      >
        {movies.map(movie => (
          <Slide movie={movie} />
        ))}
      </Carousel>
    </div>
  );
}
