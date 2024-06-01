import styled, { css } from 'styled-components';

import { devices } from '@constants/screens-conf';

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;

export const SectionWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type LayoutContainerProps = { $isSidebarOpen: boolean };

export const LayoutWrapper = styled.div<LayoutContainerProps>`
  width: 100vw;

  transition-duration: 0.4s;

  min-height: 100vh;

  display: flex;

  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.md};

  background-color: ${({ theme }) => theme.colors.primary};

  @media ${devices.tablet} {
    width: ${({ $isSidebarOpen }) =>
      $isSidebarOpen ? css`calc(100vw - 16rem)` : css`calc(100vw - 6rem)`};
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};

  height: 100%;
  width: 3px;

  position: fixed;
  right: 0;
  z-index: ${({ theme }) => theme.zIndexes.xl};

  background-color: ${({ theme }) => theme.colors.secondary};
`;
