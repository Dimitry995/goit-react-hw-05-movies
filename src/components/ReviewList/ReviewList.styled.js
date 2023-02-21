import styled from '@emotion/styled';
import { theme } from '../../services';

export const ReviewWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[4]}px;
  margin-top: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
  list-style: none;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]}px;
  padding: ${theme.space[2]}px;
  padding-left: ${theme.space[3]}px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[4]}px;
`;

export const ReviewImg = styled.img`
  display: block;
  max-width: ${theme.sizes[1]}px;
  height: 100%;
`;

export const ReviewInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]}px;
  font-size: ${theme.fontSizes[2]}px;
  margin: 0;
`;

export const ReviewContent = styled.p`
  font-size: ${theme.fontSizes[0]}px;
  margin: 0;
`;

export const NotReviews = styled.div`
  font-size: ${theme.fontSizes[4]}px;
  margin: 0;
  margin-top: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
`;
