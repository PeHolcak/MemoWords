import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Custom404 = () => {
  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5">
        Oops! We can't seem tddddddo find the page you're looking for.
      </Typography>
    </StyledContainer>
  );
};

export default Custom404;
