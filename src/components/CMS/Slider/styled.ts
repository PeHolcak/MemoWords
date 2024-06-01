import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { devices } from '@constants/screens-conf';

export const SliderWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  height: 700px;

  padding-bottom: 2rem;

  @media ${devices.tablet} {
    height: 500px;
  }

  @media ${devices.laptop} {
    height: 400px;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AnimatedSlideWrap = styled(motion.div)`
  position: absolute;
  top: 0;

  height: calc(100% - 30px);
  width: 100%;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paggination = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  margin-bottom: 0.4rem;
`;

type ArrowWrapProps = {
  $position: 'left' | 'right';
};

export const ArrowWrap = styled.div<ArrowWrapProps>`
  position: absolute;
  bottom: 0;

  ${({ $position }) =>
    $position === 'left'
      ? css`
          left: 0.3rem;
        `
      : css`
          right: 0.3rem;
        `}

  @media ${devices.laptop} {
    bottom: auto;
    top: calc(50% - 1.5rem);
    transform: translate(0, calc(50% - 1.5rem));
  }
`;
