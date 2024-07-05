import React, { memo } from 'react';

import { FallingPieceProps } from '@components/CMS/LargeBanner/DektopLayout/FallingPartsBackdrop';

import * as S from './styled';

type FallAnimationProps = {
  yEnd: number;
};

const fallAnimation = ({ yEnd }: FallAnimationProps) => ({
  initial: { y: -10, x: Math.random() * window.innerWidth, opacity: 1 },
  animate: {
    y: [0, yEnd],
    x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
    opacity: [1, 0],
    transition: { duration: 5, ease: 'linear' }
  },
  exit: {
    display: 'none',
    transition: { delay: 5 }
  }
});

const FallingPiece: React.FC<FallingPieceProps> = memo(
  ({ color, height, onAnimationComplete }) => (
    <S.StyledMotionDiv
      {...fallAnimation({ yEnd: window.innerHeight + 2 })}
      $color={color}
      $height={height}
      onAnimationComplete={onAnimationComplete}
    />
  )
);

export default FallingPiece;
