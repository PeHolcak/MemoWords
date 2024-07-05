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

export const LargeBannerContent = styled(motion.div)<LargeBannerContentProps>`
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

export const Forests = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BottomImage = styled.img`
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;

  z-index: ${({ theme }) => theme.zIndexes.xl};

  position: relative;
`;
