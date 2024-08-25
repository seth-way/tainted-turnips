import './NavBar.css';
import PropTypes from 'prop-types';
import turnip from '../../assets/images/turnip.png';

function NavBar({ handleClick }) {
  return (
    <nav>
      <div className='content'>
        <button onClick={handleClick}>
          <h1>Tainted Turnips</h1>
          <img className='logo' src={turnip} alt='turnip logo' />
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
