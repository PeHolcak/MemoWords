import styled from 'styled-components';
import { motion } from 'framer-motion';

import { devices } from '@constants/screens-conf';

export const Cloud = styled(motion.div)<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 8rem;
  height: 3.5rem;
  background-color: transparent;

  z-index: ${({ theme }) => theme.zIndexes.md};

  @media ${devices.tablet} {
    width: 24rem;
    height: 14rem;
  }
`;

type CloudPartProps = { $top: number; $left: number };

export const CloudPart = styled.div<CloudPartProps>`
  width: 45px;
  height: 45px;
  background: white;
  z-index: ${({ theme }) => theme.zIndexes.sm};
  border-radius: 50%;

  position: absolute;
  top: ${({ $top }) => $top / 3}px;
  left: ${({ $left }) => $left / 3}px;

  @media ${devices.tablet} {
    width: 120px;
    height: 120px;

    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
  }
`;
