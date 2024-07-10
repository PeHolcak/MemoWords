import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FallingPartsBackdropWrap = styled.div`
  position: absolute;
  height: 100dvh;
  width: 100%;
  overflow: hidden;

  z-index: ${({ theme }) => theme.zIndexes.xxs};
`;

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
