import React, { memo } from 'react';

import { FallingPieceProps } from '@components/CMS/LargeBanner/FallingPartsBackdrop';

import * as S from './styled';
import { getRandomNumber } from '@utils/numberUtils';

type FallAnimationProps = {
  yEnd: number;
};

const mostCommonWords = [
  'the',
  'of',
  'and',
  'to',
  'a',
  'in',
  'is',
  'you',
  'that',
  'it',
  'he',
  'was',
  'for',
  'on',
  'are',
  'as',
  'with',
  'his',
  'they',
  'I',
  'at',
  'be',
  'this',
  'have',
  'from',
  'or',
  'one',
  'had',
  'by',
  'word',
  'but',
  'not',
  'what',
  'all',
  'were',
  'we',
  'when',
  'your',
  'can',
  'said'
];

const getRandomItem = (arr: string[]) => {
  if (!arr.length) {
    return '';
  }

  const randomIndex = getRandomNumber(0, arr.length - 1);
  return arr[randomIndex];
};

const fallAnimation = ({ yEnd }: FallAnimationProps) => ({
  initial: {
    y: -10,
    x: Math.random() * window.innerWidth,
    opacity: 1,
    rotate: 0
  },
  animate: {
    y: [0, yEnd],
    x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
    opacity: [1, 0],
    rotate: [0, 360],
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
    >
      {getRandomItem(mostCommonWords)}
    </S.StyledMotionDiv>
  )
);

export default FallingPiece;
