import React from "react";
import Image from "next/image";

import { Typography } from "@mui/material";

import * as S from "./styled";

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
        <S.StyledButton variant="contained">Shop Now</S.StyledButton>
        <S.StyledButton variant="outlined">Shop Now</S.StyledButton>
      </S.TextSection>
    </S.BannerContainer>
  );
};

export default SimpleBanner;
