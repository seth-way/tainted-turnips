// import logo from './logo.svg';
import './App.css';
import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';

import ColorsDemo from '../ColorsDemo/ColorsDemo';
import movieData from '../../data/movieData';

function App() {
  const { allMovies, singleMovie } = movieData;

  return (
    <main className='App'>
      <h1>Tainted Turnips</h1>
      {/*<ColorsDemo />*/}
      <AllMovies allMovies={allMovies} title='All Movies' />
      <hr />
      <SingleMovie movie={singleMovie}/>
    </main>
  );
}

export default App;
