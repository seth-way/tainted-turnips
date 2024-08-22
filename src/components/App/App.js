// import logo from './logo.svg';
import './App.css';
import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';

import movieData from '../../data/movieData';

function App() {
  const { allMovies, singleMovie } = movieData;

  return (
    <main className='App'>
      <div className="demo">
        <span className="d1">--primary (color), --text</span>
        <span className="d2">--secondary, --text-2</span>
        <span className="d3">--accent, --text</span>
        <span className="d4">--alt, --text-2</span>
      </div>
      <AllMovies allMovies={allMovies} />
    </main>
  );
}

export default App;
