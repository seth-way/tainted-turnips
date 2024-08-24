import './App.css';
import { useState, useEffect } from 'react';
import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';

import ColorsDemo from '../ColorsDemo/ColorsDemo';
import movieData from '../../data/movieData';

function App() {
  const [allMovies, setMovies] = useState([]);
  const [featuredMovieId, setFeatured] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setMovies(data.movies);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleMovieClick = id => {
    setFeatured(id);
  };

  const handleHomeClick = () => {
    setFeatured(null);
  };

  return (
    <main className='App'>
      <h1>Tainted Turnips</h1>
      {/*<ColorsDemo />*/}
      {featuredMovieId ? (
        <SingleMovie movieId={featuredMovieId} handleClick={handleHomeClick} />
      ) : (
        <AllMovies
          allMovies={allMovies}
          title='All Movies'
          handleClick={handleMovieClick}
        />
      )}
    </main>
  );
}

export default App;
