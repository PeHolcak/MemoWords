import styled from 'styled-components';

import { devices } from '@constants/screens-conf';

export const Content = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.xs};

  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  padding: 1.5rem 1rem;
  margin: 0 1rem;

  @media ${devices.tablet} {
    padding: 3rem 5rem;
  }
`;

export const Badge = styled.div`
  background-color: #f50057;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin-bottom: 20px;
`;
