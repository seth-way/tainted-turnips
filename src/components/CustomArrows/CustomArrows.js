import './CustomArrows.css';
import { useCarousel } from 'nuka-carousel';
import { motion } from 'framer-motion';
import { ReactComponent as ArrowLeft } from '../../assets/images/caret_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/images/caret_right.svg';

export default function CustomArrows() {
  const { currentPage, totalPages, wrapMode, goBack, goForward } =
    useCarousel();

  const allowWrap = wrapMode === 'wrap';
  const enablePrevNavButton = allowWrap || currentPage > 0;
  const enableNextNavButton = allowWrap || currentPage < totalPages - 1;

  return (
    <div className='nav-arrows-wrapper'>
      {enablePrevNavButton && (
        <motion.div
          className='nav-arrow left-arrow'
          onClick={goBack}
          whileHover={{ opacity: 1, scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: 'spring' }}
        >
          <ArrowLeft />
        </motion.div>
      )}
      {enableNextNavButton && (
        <motion.div
          className='nav-arrow right-arrow'
          onClick={goForward}
          whileHover={{ opacity: 1, scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: 'spring' }}
        >
          <ArrowRight />
        </motion.div>
      )}
    </div>
  );
}
