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

type LargeBannerWrapperProps = {
  $height: number;
  $isSidebarOpen: boolean;
};

export const LargeBannerWrapper = styled.div<LargeBannerWrapperProps>`
  z-index: ${({ theme }) => theme.zIndexes.xxs};
  position: relative;
  height: ${({ $height }) => $height}px;

  background-color: gray;

  ${({ $isSidebarOpen }) => createLargeBannerContainerWidth($isSidebarOpen)}
`;

type LargeBannerContainerProps = {
  $isFrozen: boolean;
  $isSidebarOpen: boolean;
};

export const LargeBannerContainer = styled(
  motion.div
)<LargeBannerContainerProps>`
  background-color: white;

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
  height: 100vh;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndexes.xs};
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 80%,
    #003366 100%
  );
`;

export const Content = styled.div`
  position: relative;

  z-index: ${({ theme }) => theme.zIndexes.xs};

  color: #fff;
`;

export const Badge = styled.div`
  background-color: #f50057;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const BannerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: ${({ theme }) => theme.zIndexes.xxs};

  & > span {
    height: 100% !important;
  }

  img {
    object-fit: cover;
  }
`;

type ArticleWrapperProps = { index: number };

export const ArticleWrapper = styled.div<ArticleWrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: ${({ index, theme }) => index + theme.zIndexes.md};

  width: 100%;
  max-width: 45rem;

  @media ${devices.tablet} {
    width: auto;
  }
`;

export const Forests = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
`;
