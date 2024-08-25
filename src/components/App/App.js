import './App.css';
import { useState, useEffect } from 'react';

import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [allMovies, setMovies] = useState([]);
  const [featuredMovieId, setFeatured] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        const error = new Error(res.statusText);
        error.code = res.status;
        throw error;
      }
      const { movies } = await res.json();
      setMovies(movies);
    } catch (err) {
      console.error(err);
      setError(err);
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
      <NavBar handleClick={handleHomeClick}/>
      {/*<ColorsDemo />*/}
      {error ? (
        <ErrorMessage error={error} />
      ) : featuredMovieId ? (
        <SingleMovie movieId={featuredMovieId} />
      ) : (
        <AllMovies allMovies={allMovies} handleClick={handleMovieClick} />
      )}
      <Footer />
    </main>
  );
}

export default App;
