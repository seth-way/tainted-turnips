import './MovieCard.css';

export default function MovieCard({ movie }) {
  const { id, poster_path, title, average_rating } = movie;
  return (
    <div className='movie-card'>
      id: {id} <br /> url: {poster_path} <br /> title: {title} <br /> rating:{' '}
      {average_rating}
    </div>
  );
}
