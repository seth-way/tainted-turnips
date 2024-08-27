import './NavBar.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import turnip from '../../assets/images/turnip.png';
import popcorn from '../../assets/images/popcorn.png';

function NavBar({ handleClick }) {
  return (
    <nav>
      <div className='content'>
        <motion.img
          src={popcorn}
          alt='retro popcorn cartoon character'
          whileHover={{
            rotate: 360,
            translateX: '15px',
          }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: 'spring', duration: 1.5 }}
        />
        <motion.button
          onClick={handleClick}
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
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
