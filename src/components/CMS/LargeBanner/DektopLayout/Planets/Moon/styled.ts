import styled from 'styled-components';
import { motion, MotionValue } from 'framer-motion';

import {
  lightenByFourtyPercent,
  lightenBySixtyPercent
} from 'src/utils/colorUtils';

type MoonType = { $color: string };

export const MoonShadow = styled.div`
  background-color: ${({ theme }) => theme.colors.shadow};
  width: 12rem;
  height: 12rem;

  border-radius: 50%;

  position: absolute;
  left: 4rem;
`;

export const Moon = styled(motion.div)<MoonType>`
  overflow: hidden;
  width: 12rem;
  height: 12rem;

  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;

  background-color: ${({ $color }) => $color};
  background-image: ${({ $color }) =>
    `radial-gradient(circle, ${$color}, ${lightenBySixtyPercent($color)} 50%, transparent 70%)`};
  /* box-shadow:
    0 0 1.3rem 1.3rem ${({ $color }) => lightenByFourtyPercent($color)},
    0 0 1.5rem 1.5rem ${({ $color }) => lightenBySixtyPercent($color)}; */
`;

type MoonWrapperProps = {
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
  rotate: MotionValue<number>;
};

export const MoonWrapper = styled(motion.div)<MoonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transform: ${({ translateX, translateY, rotate }) =>
    `translate(${translateX}px, ${translateY}px), rotate(${rotate}deg)`};
`;
