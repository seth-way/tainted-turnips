import './NavBar.css';
import PropTypes from 'prop-types';
import turnip from '../../assets/images/turnip.png';

function NavBar({ handleClick }) {
  return (
    <nav>
      <div className='content'>
        <button onClick={handleClick}>
          <img className='logo' src={turnip} alt='turnip logo' />
          <h1>Tainted Turnips</h1>
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
