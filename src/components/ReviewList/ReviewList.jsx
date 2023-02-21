import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { POSTER_URL } from 'services';
import {
  ReviewWrapper,
  ReviewItem,
  ReviewImg,
  ReviewInfo,
  AuthorWrapper,
  ReviewContent,
  NotReviews,
} from './ReviewList.styled';
import defaultImage from '../../images/defaultImage.webp';

export const ReviewList = ({ reviews: { results, total_results } }) => {
  if (!total_results)
    return <NotReviews>We don't have any reviews of this movie</NotReviews>;

  return (
    <ReviewWrapper>
      {results.map(
        ({
          id,
          author,
          author_details: { avatar_path },
          content,
          updated_at,
        }) => {
          return (
            <ReviewItem key={id}>
              <AuthorWrapper>
                {avatar_path && (
                  <ReviewImg src={`${POSTER_URL}${avatar_path}`} alt={author} />
                )}
                {!avatar_path && <ReviewImg src={defaultImage} alt={author} />}
                <ReviewInfo>
                  <span>
                    <b>Author: </b> {author}
                  </span>
                  <span>
                    <b>Updated at: </b> {format(new Date(updated_at), 'PPpp')}
                  </span>
                </ReviewInfo>
              </AuthorWrapper>
              <ReviewContent>{content}</ReviewContent>
            </ReviewItem>
          );
        }
      )}
    </ReviewWrapper>
  );
};

ReviewList.porTypes = {
  reviews: PropTypes.object.isRequired,
};
