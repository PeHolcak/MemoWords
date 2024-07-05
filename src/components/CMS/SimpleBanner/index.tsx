import React from 'react';

import ButtonLink from '@components/Buttons/ButtonLink';

import { Typography } from '@mui/material';

import * as S from './styled';

type SimpleBannerProps = {
  header: string;
  description: string;
};

const SimpleBanner: React.FC<SimpleBannerProps> = ({ header, description }) => {
  return (
    <S.BannerContainer>
      <S.TextSection>
        <Typography variant="h3" component="h1">
          {header}
        </Typography>
        <Typography>{description}</Typography>
        <ButtonLink variant="contained" link="/shop">
          Shop Now
        </ButtonLink>
        <ButtonLink variant="outlined" link="/shop">
          Contact
        </ButtonLink>
      </S.TextSection>
    </S.BannerContainer>
  );
};

export default SimpleBanner;
