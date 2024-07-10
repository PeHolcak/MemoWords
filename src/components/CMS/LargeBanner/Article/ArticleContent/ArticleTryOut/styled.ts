import styled from 'styled-components';

import { devices } from '@constants/screens-conf';

export const Content = styled.div`
  max-height: calc(100dvh - 2rem - 2rem);
  overflow-y: auto;
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.xs};

  background-color: ${({ theme }) => theme.colors.modalBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  padding: 1.5rem 1rem;
  margin: 0 1rem;

  @media ${devices.tablet} {
    padding: 2.2rem 3rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Badge = styled.div`
  background-color: #f50057;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const MemoCardsListWrapper = styled.div`
  height: 31rem;
  width: 30rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;
