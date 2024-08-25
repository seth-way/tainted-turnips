import './NavBar.css';
import turnip from '../../assets/images/turnip.png';

export default function NavBar() {
  return (
    <nav>
      <div className='content'>
        <button>
          <img className="logo" src={turnip} alt="turnip logo" />
          <h1>Tainted Turnips</h1>
        </button>
      </div>
    </nav>
  );
}
