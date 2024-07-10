import styled from 'styled-components';

import { devices } from '@constants/screens-conf';

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const SectionWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type HomePageContainerProps = { $translatetoleft: boolean };

export const HomePageContainer = styled.div<HomePageContainerProps>`
  width: 100vw;
  min-height: 100dvh;
  display: flex;

  transform: ${({ $translatetoleft }) =>
    $translatetoleft ? 'translateX(-10rem)' : 'translateX(0)'};
  transition: transform 0.3s ease;

  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.md};

  @media ${devices.tablet} {
    width: calc(100vw - 6rem);
  }
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: 100dvh;
  width: 3px;
`;
