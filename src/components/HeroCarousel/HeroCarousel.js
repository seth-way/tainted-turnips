import './HeroCarousel.css';
import { Carousel, useCarousel } from 'nuka-carousel';
import Slide from '../Slide/Slide';
import PropTypes from "prop-types";
import AllMovies from "../AllMovies/AllMovies";

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
          key={`${index}-dot`}
          onClick={() => goToPage(index)}
          className={className(index)}
        />
      ))}
    </div>
  );
};

function HeroCarousel({ movies, handleClick }) {
  return (
    <div className='carousel'>
      <Carousel
        showDots
        autoplay
        dots={<CustomDots />}
        wrapMode='wrap'
        autoplayInterval={2500}
      >
        {movies.map((movie, idx) => (
          <Slide movie={movie} key={`${idx}-${movie.title}`} handleClick={handleClick}moreInfo />
        ))}
      </Carousel>
    </div>
  );
}
HeroCarousel.propTypes = {
  movies: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
}
export default HeroCarousel;