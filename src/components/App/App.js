import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import NavBar from '../NavBar/NavBar';
import SingleMovie from '../SingleMovie/SingleMovie';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingSlide from '../LoadingSlide/LoadingSlide';

function App() {
  const [allMovies, setMovies] = useState([]);
  const [featuredMovieId, setFeatured] = useState(null);
  const navigate = useNavigate();

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
      navigate(`/error/${err.code || err.statusCode}`)
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <main className='App'>
      <NavBar />
        <Routes>
          <Route path="/tainted-turnips" element={<AllMovies allMovies={allMovies}/>}/>
          <Route path="/" element={<AllMovies allMovies={allMovies}/>}/>
          <Route path="/movies/:id" element={<SingleMovie/>}/>
          <Route path="/error/:code" element={<ErrorMessage/>}/>
        </Routes>
      <Footer />
    </main>
  );
}

export default App;

      /* {error ? (
          <ErrorMessage error={error} />
        ) : featuredMovieId ? (
          <SingleMovie movieId={featuredMovieId} />
        ) : (
          <AllMovies allMovies={allMovies} handleClick={handleMovieClick} />
        )} */