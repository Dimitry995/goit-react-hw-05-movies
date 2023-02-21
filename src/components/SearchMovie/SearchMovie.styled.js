import styled from '@emotion/styled';
import { theme } from '../../services';

export const SearchbarWrapper = styled.section`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: ${theme.sizes[0]}px;
  padding: ${theme.space[2]}px ${theme.space[5]}px;
  padding-left: ${theme.space[7]}px;
  background-color: ${theme.colors.primeBg};
  box-shadow: ${theme.shadows.prime};
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: ${theme.sizes[7]}px;
  background-color: ${theme.colors.prime};
  border-radius: ${theme.radii[1]}px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: ${theme.sizes[0]}px;
  height: ${theme.sizes[0]}px;
  border: ${theme.borders.secondary};
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: ${theme.opacities[0]}px;
  transition: ${theme.transitions.opacity};
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: ${theme.opacities[1]}px;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${theme.fontSizes[4]}px;
  border: none;
  outline: none;
  padding: ${theme.space[1]}px;
  &::placeholder {
    font-style: inherit;
    font-size: ${theme.fontSizes[3]}px;
  }
`;
