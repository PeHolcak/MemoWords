import React from 'react';

import * as S from './styled';
import { useParallaxAnimation } from '@components/CMS/LargeBanner/DektopLayout/Planets/useParallaxAnimation';

export type InitialPositionType = {
  x: number;
  y: number;
};

type ParallaxAnimationProps = React.PropsWithChildren<{
  threshold: number;
}>;

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({ threshold }) => {
  const { translateX, translateY, background } = useParallaxAnimation(
    threshold,
    ['#ede0a2', '#ffd500', '#ff8800']
  );
  return (
    <S.SunWrapper
      translateX={translateX}
      translateY={translateY}
      style={{
        x: translateX,
        y: translateY
      }}
    >
      <S.Sun $color={background.get()} />
    </S.SunWrapper>
  );
};

export default ParallaxAnimation;
