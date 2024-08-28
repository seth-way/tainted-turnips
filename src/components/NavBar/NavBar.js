import './NavBar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import turnip from '../../assets/images/turnip.png';
import popcorn from '../../assets/images/popcorn.png';
import movieTime from '../../assets/images/movie-time.png';

function NavBar() {
  return (
    <nav>
      <div className='content'>
        <motion.div
          className='retro-popcorn'
          whileHover={{
            rotate: 360,
            translateX: '15px',
          }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <motion.img
            src={popcorn}
            alt='retro popcorn cartoon character'
            initial={{ x: '-400%', scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ type: 'spring', delay: 1.25 }}
          />
          <img src={movieTime} alt='movie time speech bubble'></img>
        </motion.div>
        <Link to="/">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
        >
          <motion.h1
            initial={{ x: '400%', scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ type: 'spring', delay: 0.5 }}
          >
            Tainted Turnips
          </motion.h1>
          <motion.img
            className='logo'
            src={turnip}
            alt='turnip logo'
            initial={{ y: '-400%', scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ type: 'spring', delay: 1 }}
          />
        </motion.button>
        </Link>
      </div>
    </nav>
  );
}



export default NavBar;
