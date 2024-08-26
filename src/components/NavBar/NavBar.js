import './NavBar.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import turnip from '../../assets/images/turnip.png';

function NavBar({ handleClick }) {
  return (
    <nav>
      <div className='content'>
        <button onClick={handleClick}>
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
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
