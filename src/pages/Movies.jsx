import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from 'services';
import { Loader } from 'services';
import { SearchMovie } from 'components/SearchMovie';

const MovieList = lazy(() => import('../components/MovieList'));

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem('movies')) || null
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    API.fetchMovieSearch(movieName)
      .then(res => {
        setMovies(res);
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .catch(() => toast.error('Sorry, there are not details of this movie'));
  }, [movieName]);

  const onSubmitForm = search => {
    if (search !== query) {
      setQuery(search);
      setSearchParams({ query: search });
    } else {
      toast.warn('The new search must be different from the current search');
    }
  };

  return (
    <>
      <SearchMovie value={movieName} onSubmit={onSubmitForm} />
      <Suspense fallback={<Loader />}>
        {movies && <MovieList movies={movies} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Movies;
