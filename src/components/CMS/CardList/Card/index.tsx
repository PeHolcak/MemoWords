import React from 'react';
import styled from 'styled-components';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
`;

const Image = styled(CardMedia)`
  height: 140px;
`;

const Title = styled(Typography)`
  text-align: center;
`;

const ReserveButton = styled(Button)`
  width: 100%;
  background-color: #d4af37; // Příkladová zlatá barva
  color: white;

  &:hover {
    background-color: #b29600;
  }
`;

type VacationCardProps = {destination: string, imageUrl: string}

const VacationCard: React.FC<VacationCardProps> = ({ destination, imageUrl }) => (
  <StyledCard>
    <Image image={imageUrl} title={destination} />
    <CardContent>
      <Title variant="h6">{destination}</Title>
      <Box display="flex" justifyContent="center" mt={2}>
        <ReserveButton variant="contained">Reserve</ReserveButton>
      </Box>
    </CardContent>
  </StyledCard>
);

export default VacationCard;