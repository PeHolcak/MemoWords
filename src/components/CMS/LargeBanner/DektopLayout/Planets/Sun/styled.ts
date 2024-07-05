import styled from 'styled-components';
import { motion, MotionValue } from 'framer-motion';

import {
  lightenByTwentyPercent,
  lightenByFourtyPercent,
  lightenBySixtyPercent
} from 'src/utils/colorUtils';

import { InitialPositionType } from './index';

type SunType = { $color: string };

export const Sun = styled(motion.div)<SunType>`
  justify-content: center;
  align-items: center;
  position: relative;

  width: 12rem;
  height: 12rem;

  border-radius: 50%;

  background-color: ${({ $color }) => $color};
  background-image: ${({ $color }) =>
    `radial-gradient(circle, ${$color}, ${lightenByTwentyPercent($color)} 50%, transparent 70%)`};
  box-shadow:
    0 0 1.5rem 1rem ${({ $color }) => lightenByFourtyPercent($color)},
    0 0 3rem 1.5rem ${({ $color }) => lightenBySixtyPercent($color)};
`;

type SunWrapperProps = {
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
};

export const SunWrapper = styled(motion.div)<SunWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  transform: ${({ translateX, translateY }) =>
    `translate(${translateX}px, ${translateY}px)`};
`;
