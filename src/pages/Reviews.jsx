import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'services';
import { API } from 'services';
import { ReviewList } from 'components/ReviewList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    API.fetchReviewsById(movieId)
      .then(data => setReviews(data))
      .catch(() => toast.error('Sorry, there are not reviews of this movie'));
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {reviews && <ReviewList reviews={reviews} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Reviews;
