import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  min-height: 100dvh;
`;

export const Content = styled(motion.main)`
  flex-grow: 1;
  padding: 20px;
  margin-left: 240px;
`;

export const MenuButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
`;
