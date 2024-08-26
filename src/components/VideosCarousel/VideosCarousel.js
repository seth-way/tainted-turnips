import './VideosCarousel.css';
import PropTypes from 'prop-types';
import { Carousel, useCarousel } from 'nuka-carousel';
import CustomArrows from '../CustomArrows/CustomArrows';

function VideosCarousel({ type, keys, title }) {
  const baseURL = 'https://www.youtube.com/embed/';

  return (
    <div className='videos-carousel-container'>
      <h3>{`${type}s`}</h3>
      <Carousel
        id={`${type}-videos-carousel`}
        showArrows
        scrollDistance='slide'
        arrows={<CustomArrows />}
      >
        {keys.map((videoKey, idx) => (
          <div className='iframe-wrapper'>
            <iframe
              src={baseURL + videoKey}
              title={`${title} ${type} ${idx + 1}`}
              allow='fullscreen'
            ></iframe>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

VideosCarousel.propTypes = {
  type: PropTypes.string.isRequired,
  keys: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideosCarousel;
