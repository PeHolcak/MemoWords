import styled from 'styled-components';

export const StyledI = styled.i`
  font-size: 21px;
  transition-duration: 0.7s;
  color: ${({ theme }) => theme.colors.alpha};
  user-select: none;
`;
