import styled from 'styled-components';
import Button from '@mui/material/Button';

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 6rem 2rem;

  min-height: 30vh;
`;

export const TextSection = styled.div`
  text-align: center;
  max-width: 76rem;
`;

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

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  position: absolute;
  z-index: -1;
  opacity: 0.5;
`;
