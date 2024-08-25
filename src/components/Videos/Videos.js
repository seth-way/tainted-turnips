import './Videos.css';
import PropTypes from 'prop-types';
import { groupVideos } from '../../utils/videos';
import VideosCarousel from '../VideosCarousel/VideosCarousel';

function Videos({ videos, title }) {
  const groupedVideos = groupVideos(videos);
  if (!videos.length || !groupedVideos.YouTube) return <></>;
  const youTubeVideos = groupedVideos.YouTube;
  const types = Object.keys(youTubeVideos).sort().reverse();
  return (
    <div className='all-videos'>
      {types.map(type => (
        <VideosCarousel type={type} keys={youTubeVideos[type]} key={type} title={title}/>
      ))}
    </div>
  );
}

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Videos;
