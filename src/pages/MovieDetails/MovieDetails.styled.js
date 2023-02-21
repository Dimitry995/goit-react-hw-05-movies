import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { theme } from '../../services';

export const ButtonGoBack = ({ to, children }) => {
  return <ButtonStyles to={to}>{children}</ButtonStyles>;
};

ButtonGoBack.propTypes = {
  to: PropTypes.string.isRequired,
};

export const ButtonStyles = styled(Link)`
  font-size: ${theme.fontSizes[1]}px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  color: inherit;
  background-color: ${theme.colors.secondBg};

  width: ${theme.sizes[3]}px;
  margin-top: ${theme.space[2]}px;
  margin-left: ${theme.space[7]}px;
  padding: ${theme.space[0]}px ${theme.space[1]}px;

  border-radius: ${theme.radii[1]}px;
  border: none;
  box-shadow: ${theme.shadows.prime};
  transition: ${theme.transitions.all};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors.otherBg};
    color: ${theme.colors.second};
  }
`;

export const AddInfoWrapper = styled.div`
  display: flex;
  gap: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
  margin-top: ${theme.space[2]}px;
`;

export const InfoItem = styled(NavLink)`
  font-size: ${theme.fontSizes[2]}px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  background-color: ${theme.colors.secondBg};
  padding: ${theme.space[0]}px ${theme.space[1]}px;
  width: ${theme.sizes[2]}px;
  margin: 0;

  border-radius: ${theme.radii[1]}px;
  border: none;
  box-shadow: ${theme.shadows.prime};
  transition: ${theme.transitions.all};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors.otherBg};
    color: ${theme.colors.second};
  }
`;
