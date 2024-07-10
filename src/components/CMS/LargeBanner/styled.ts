import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { devices } from '@constants/screens-conf';

const createLargeBannerContainerTabletWidth = (isSidebarOpen: boolean) => {
  if (isSidebarOpen) {
    return 'calc(100vw - 16rem)';
  } else if (!isSidebarOpen) {
    return 'calc(100vw - 6rem)';
  }
};

const createLargeBannerContainerWidth = (isSidebarOpen: boolean) => {
  return css`
    width: 100vw;

    @media ${devices.tablet} {
      width: ${createLargeBannerContainerTabletWidth(isSidebarOpen)};
    }
  `;
};

type ArticleWrapperProps = { index: number };

export const ArticleWrapper = styled.div<ArticleWrapperProps>`
  position: absolute;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;

  z-index: ${({ index, theme }) => index + theme.zIndexes.md};

  width: 100%;
  max-width: 45rem;

  @media ${devices.tablet} {
    width: auto;
  }
`;

type LargeBannerWrapperProps = {
  $isSidebarOpen: boolean;
};

export const LargeBannerWrapper = styled.div<LargeBannerWrapperProps>`
  ${({ $isSidebarOpen }) => createLargeBannerContainerWidth($isSidebarOpen)}

  background-color: ${({ theme }) => theme.colors.background};

  transition-duration: 0.4s;

  z-index: ${({ theme }) => theme.zIndexes.xxs};
  position: relative;
`;

type LargeBannerContainerProps = {
  $height: number;
  $isSidebarOpen: boolean;
};

export const LargeBannerContainer = styled.div<LargeBannerContainerProps>`
  z-index: ${({ theme }) => theme.zIndexes.xxs};
  position: relative;
  height: ${({ $height }) => $height}px;

  ${({ $isSidebarOpen }) => createLargeBannerContainerWidth($isSidebarOpen)}
`;

type LargeBannerContentProps = {
  $isFrozen: boolean;
  $isSidebarOpen: boolean;
};

export const LargeBannerContent = styled.div<LargeBannerContentProps>`
  background-color: ${({ theme }) => theme.colors.background};

  top: ${({ $isFrozen }) => ($isFrozen ? 0 : 'auto')};
  ${({ $isFrozen }) =>
    $isFrozen
      ? css`
          position: fixed;
          top: 0;
        `
      : css`
          position: absolute;
          bottom: 0;
        `}

  transition-duration: 0.4s;

  ${({ $isSidebarOpen }) => createLargeBannerContainerWidth($isSidebarOpen)}
  height: 100dvh;
`;
