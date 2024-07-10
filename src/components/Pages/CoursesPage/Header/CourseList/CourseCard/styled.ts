import styled from 'styled-components';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)`
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 6px 20px rgba(0, 0, 0, 0.19);

  border-radius: ${({ theme }) => theme.borderRadius.primary};

  text-decoration: none;
`;
