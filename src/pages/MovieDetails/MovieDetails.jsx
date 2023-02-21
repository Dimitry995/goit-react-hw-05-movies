import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'services';
import { Loader } from 'services';
import { MovieCard } from 'components/MovieCard';
import { ButtonGoBack, AddInfoWrapper, InfoItem } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  const location = useLocation();

  const initialPath = useRef(location?.state?.from?.pathname || null);

  let backLink = '';
  if (initialPath.current === '/') {
    backLink = '/';
  } else backLink = '/movies';

  useEffect(() => {
    API.fetchMovieById(movieId)
      .then(movie => setMovieDetails(movie))
      .catch(() => toast.error('Sorry, there are not details of this movie'));
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <Suspense fallback={<Loader />}>
          <ButtonGoBack to={backLink}>⬅ Go back</ButtonGoBack>
          <MovieCard movieDetails={movieDetails} />
          <AddInfoWrapper>
            <InfoItem
              to={`/movies/${movieId}/cast`}
              // state={{ from: location }}
            >
              Cast
            </InfoItem>
            <InfoItem
              to={`/movies/${movieId}/reviews`}
              // state={{ from: location }}
            >
              Reviews
            </InfoItem>
          </AddInfoWrapper>
        </Suspense>
      )}
      {movieDetails && (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};
