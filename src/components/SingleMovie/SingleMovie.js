import './SingleMovie.css';
import Slide from '../Slide/Slide';
import { convertToCurrency } from '../../utils';

export default function SingleMovie({ movie }) {
  const { release_date, overview, budget, revenue } = movie;
  return (
    <div class='single-movie-view'>
      <Slide movie={movie} />
      <div class='single-movie-description'>
        <div class='overview'>
          <h4>Description</h4>
          <p class='single-overview'>{overview}</p>
        </div>
        <div class='mini-description'>
          <p>{release_date}</p>
          <p class='single-budget'>{convertToCurrency(budget)}</p>
          <p class='single-revenue'>{convertToCurrency(revenue)}</p>
        </div>
      </div>
    </div>
  );
}
