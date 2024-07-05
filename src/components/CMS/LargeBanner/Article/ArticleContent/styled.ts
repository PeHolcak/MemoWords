import styled from 'styled-components';

import { devices } from '@constants/screens-conf';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 31rem;
  width: 30rem;

  max-width: calc(100dvw - 5rem);
  max-height: calc(100dvh - 2rem - 2rem);
  overflow-y: hidden;
  z-index: ${({ theme }) => theme.zIndexes.xs};

  transition-duration: 0.4s;

  background-color: ${({ theme }) => theme.colors.modalBackground};
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  padding: 1.5rem 1rem 1.5rem 2rem;
  margin: 0 1rem;

  @media ${devices.tablet} {
    padding: 2.2rem 3rem 2.2rem 4rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Paggination = styled.div`
  position: absolute;

  top: 50%;
  left: 0.8rem;
  transform: translate(0, -50%);

  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

type PagginationButtonProps = { isActive: boolean };

export const PagginationButton = styled.div<PagginationButtonProps>`
  width: 1rem;
  aspect-ratio: 1;

  background-color: ${({ theme }) => theme.colors.highlightDark};

  border-radius: 50%;

  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

  clip-rule: pointer;
`;
