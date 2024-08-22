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

  return <main className='App'>
    <AllMovies allMovies={allMovies}/>
  </main>;
}

export default App;
