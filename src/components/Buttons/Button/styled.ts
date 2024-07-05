import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  && {
    margin-top: 2rem;
    margin-right: 1rem;
    border-color: #000;
    color: #000;
    font-weight: bold;

    &:hover {
      background-color: #000;
      color: #fff;
      border-color: #000;
    }
  }

  &:first-of-type {
    background-color: #000;
    color: #fff;
  }
`;
