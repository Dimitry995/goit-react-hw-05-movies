import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'services';
import { API } from 'services';
import { CastList } from 'components/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState();

  useEffect(() => {
    API.fetchCreditsById(movieId)
      .then(data => setCredits(data))
      .catch(() => toast.error('Sorry, there is not cast of this movie'));
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {credits && <CastList credits={credits} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Cast;
