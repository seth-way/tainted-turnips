export const getRecentMovies = movies => {
  const sortedByDate = movies.sort(
    (a, b) => new Date(b.release_date) - new Date(a.release_date)
  );

  return sortedByDate.slice(0, 8);
};

export const getMoviesData = async movies => {
  const URL = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
  const result = [];

  try {
    for (const { id } of movies) {
      const res = await fetch(URL + id);
      const { movie } = await res.json();
      result.push(movie);
    }
  } catch (err) {
    console.error(err);
  }

  return result;
};
