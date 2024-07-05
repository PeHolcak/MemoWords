import styled from 'styled-components';
import { motion } from 'framer-motion';

type SnowflakeProps = {
  $height: number;
  $color: string;
};

export const StyledMotionDiv = styled(motion.div)<SnowflakeProps>`
  background-color: ${({ $color }) => $color};

  position: absolute;
  top: -10px;

  border-radius: 10px;
  padding: 0.5rem 1rem;

  color: white;
  font-weight: bold;

  text-transform: uppercase;
`;
