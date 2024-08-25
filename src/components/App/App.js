import './App.css';
import { useState, useEffect } from 'react';

import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';

function App() {
  const [allMovies, setMovies] = useState([]);
  const [featuredMovieId, setFeatured] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    try {
      const res = await fetch(URL);
      const {movies}= await res.json();
      setMovies(movies);
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
      <NavBar />
      {/*<ColorsDemo />*/}
      {error ? (
        <h2>{`Error: ${error}`}</h2>
      ) : featuredMovieId ? (
        <SingleMovie movieId={featuredMovieId} handleClick={handleHomeClick} />
      ) : (
        <AllMovies
          allMovies={allMovies}
          handleClick={handleMovieClick}
        />
      )}
    </main>
  );
}

export default App;
