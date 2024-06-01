import React from 'react';

import { ItemType } from '@components/CMS/Slider';
import { publicImages } from '@constants/public-images';

import * as S from './styled';

const Slide: React.FC<ItemType> = ({ name, description }) => {
  return (
    <S.BannerWrapper>
      <S.TextSection>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextSection>
      <S.ImageWrapper>
        <S.StyledImage
          src={publicImages.background}
          alt="Smart Slider 3 with particle effect"
        />
      </S.ImageWrapper>
    </S.BannerWrapper>
  );
};

export default Slide;
