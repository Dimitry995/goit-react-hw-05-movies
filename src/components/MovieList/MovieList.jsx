import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieListWrapper, MovieItem, MovieImg } from './MovieList.styled';
import { POSTER_URL } from 'services';
import noPoster from '../../images/noPoster.jpg';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListWrapper>
      {movies.map(({ id, title, backdrop_path }) => {
        return (
          <MovieItem key={id} to={`/movies/${id}`} state={{ from: location }}>
            {backdrop_path && (
              <MovieImg src={`${POSTER_URL}${backdrop_path}`} alt={title} />
            )}
            {!backdrop_path && <MovieImg src={noPoster} alt={title} />}
            {title}
          </MovieItem>
        );
      })}
    </MovieListWrapper>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
