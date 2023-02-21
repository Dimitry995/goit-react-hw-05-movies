import styled from '@emotion/styled';
import { theme } from '../../services';

export const CastWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[4]}px;
  margin-top: ${theme.space[4]}px;
  padding-left: ${theme.space[7]}px;
`;

export const CastItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[4]}px;
  font-size: ${theme.fontSizes[2]}px;
  color: inherit;
  width: ${theme.sizes[5]}px;
  padding: ${theme.space[1]}px;
  padding-left: ${theme.space[3]}px;
  border-radius: ${theme.radii[0]}px;
  box-shadow: ${theme.shadows.prime};
`;

export const CastImg = styled.img`
  display: block;
  max-width: ${theme.sizes[1]}px;
  height: 100%;
`;

export const CastInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]}px;
  font-size: ${theme.fontSizes[2]}px;
  margin: 0;
`;
