import styled from 'styled-components';
import { motion } from 'framer-motion';

type SnowflakeProps = {
  $height: number;
  $color: string;
};

export const StyledMotionDiv = styled(motion.div)<SnowflakeProps>`
  height: ${({ $height }) => $height}px;
  aspect-ratio: 1;
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  position: absolute;
  top: -10px;
`;
