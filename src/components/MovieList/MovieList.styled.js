import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../services';

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[4]}px;
  margin-top: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
`;

export const MovieItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.space[4]}px;
  font-size: ${theme.fontSizes[3]}px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  width: ${theme.sizes[6]}px;
  padding: ${theme.space[1]}px;
  padding-left: ${theme.space[3]}px;
  background-color: ${theme.colors.primeBg};
  border-radius: ${theme.radii[0]}px;
  box-shadow: ${theme.shadows.second};

  &:hover,
  &:focus {
    color: ${theme.colors.second};
    background-color: ${theme.colors.secondBg};
    box-shadow: ${theme.shadows.prime};
  }
`;

export const MovieImg = styled.img`
  display: block;
  max-width: ${theme.sizes[3]}px;
  height: auto;
`;
