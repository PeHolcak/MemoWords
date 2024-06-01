import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

import useDimensions from 'src/hooks/useDimensions';

import * as S from './styled';
import { useParallaxAnimation } from './useParallaxAnimation';

export type InitialPositionType = {
  x: number;
  y: number;
};

type ParallaxAnimationProps = React.PropsWithChildren<{
  threshold: number;
}>;

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({ threshold }) => {
  const { translateX, translateY, background } =
    useParallaxAnimation(threshold);
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
