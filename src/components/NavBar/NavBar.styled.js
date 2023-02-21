import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../services';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: ${theme.space[2]}px;
  padding-left: ${theme.space[7]}px;
  gap: ${theme.space[7]}px;
  width: 100vw;
  background-color: ${theme.colors.headerBg};
  box-shadow: ${theme.shadows.other};
`;

export const NavBarItem = styled(NavLink)`
  font-size: ${theme.fontSizes[5]}px;
  display: block;
  text-decoration: none;

  &.active {
    color: ${theme.colors.second};
    border-bottom: ${theme.borders.prime};
  }
`;
