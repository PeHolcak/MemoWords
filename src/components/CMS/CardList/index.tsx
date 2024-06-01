import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

import VacationCard from './Card';

const VacationListContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  padding: 16px;
  margin-top: 16px;
`;

const Heading = styled(Typography)`
  text-align: center;
  margin-bottom: 16px;
`;

const VacationList = () => (
  <Box>
    <Heading variant="h4">Inspiration For Your Next Vacation</Heading>
    <VacationListContainer>
      <VacationCard
        destination="Bali"
        imageUrl={
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
      />
      <VacationCard
        destination="Kenya"
        imageUrl={
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
      />
      <VacationCard
        destination="Iceland"
        imageUrl={
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
      />
      <VacationCard
        destination="Greece"
        imageUrl={
          'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
      />
      <VacationCard
        destination="Arizona"
        imageUrl={
          'https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg'
        }
      />
    </VacationListContainer>
  </Box>
);

export default VacationList;
