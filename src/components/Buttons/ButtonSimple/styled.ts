import styled from 'styled-components';
import { Typography } from '@mui/material';

interface StyledButtonProps {
  variant: 'primary' | 'ghost';
}

const getColor = (variant: 'primary' | 'ghost') => {
  if (variant === 'primary') {
    return '#000';
  }

  return '#fff';
};

export const StyledButton = styled(Typography)<StyledButtonProps>`
  cursor: pointer;
  color: ${({ variant }) => getColor(variant)};

  &:hover {
    color: ${({ variant }) => getColor(variant)};
  }
`;
