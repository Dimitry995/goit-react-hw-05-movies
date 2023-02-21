import styled from '@emotion/styled';
import { theme } from '../../services';

export const CardWrapper = styled.section`
  display: flex;
  gap: ${theme.space[4]}px;
  margin-top: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
`;

export const Poster = styled.img`
  display: block;
  max-width: ${theme.sizes[4]}px;
  height: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Subtitle = styled.h2`
  color: inherit;
  margin: 0;
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes[1]}px;
  font-weight: 400;
  padding-top: ${theme.space[0]}px;
  margin: 0;
`;

export const AddInfo = styled.h2`
  color: inherit;
  margin: 0;
  padding-top: ${theme.space[6]}px;
  padding-left: ${theme.space[7]}px;
`;
