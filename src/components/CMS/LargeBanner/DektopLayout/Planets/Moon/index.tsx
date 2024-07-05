import React from 'react';

import { useParallaxAnimation } from '@components/CMS/LargeBanner/DektopLayout/Planets/useParallaxAnimation';

import * as S from './styled';
export type InitialPositionType = {
  x: number;
  y: number;
};

type ParallaxAnimationProps = React.PropsWithChildren<{
  threshold: number;
}>;

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({ threshold }) => {
  const { translateX, translateY, background, rotate } = useParallaxAnimation(
    threshold,
    ['#2d2d2d', '#b4b4b4', '#af977c']
  );
  return (
    <S.MoonWrapper
      translateX={translateX}
      translateY={translateY}
      rotate={rotate}
      style={{
        x: translateX,
        y: translateY,
        rotate: rotate
      }}
    >
      <S.Moon $color={background.get()}>
        <S.MoonShadow />
      </S.Moon>
    </S.MoonWrapper>
  );
};

export default ParallaxAnimation;
