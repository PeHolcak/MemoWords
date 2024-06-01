import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getRandomNumber } from '@utils/numberUtils';
import { generateRandomColor } from '@utils/colorUtils';

import FallingPiece from './FallingPiece';
import FallingWord from './FallingWord';

import * as S from './styled';
const MIN_PART_HEIGHT = 7;
const MAX_PART_HEIGHT = 16;

export type FallingPieceProps = {
  color: string;
  height: number;
  onAnimationComplete: () => void;
};

const renderOneOfThem = (
  FirstComponent: React.FC<FallingPieceProps>,
  SecondComponent: React.FC<FallingPieceProps>,
  props: FallingPieceProps & { key: string }
) => {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return <FirstComponent {...props} />;
  } else {
    return <SecondComponent {...props} />;
  }
};

const FallingPieces: React.FC = () => {
  const [flakes, setFlakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newFlakeKey = uuidv4();
      const color = generateRandomColor();
      const height = getRandomNumber(MIN_PART_HEIGHT, MAX_PART_HEIGHT);

      const newFlake = renderOneOfThem(FallingPiece, FallingWord, {
        key: newFlakeKey,
        color: color,
        height: height,
        onAnimationComplete: () => handleAnimationComplete(newFlakeKey)
      });

      setFlakes(flakes => [...flakes, newFlake]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = (flakeKey: string) => {
    setFlakes(flakes => flakes.filter(flake => flake.key !== flakeKey));
  };

  return <S.FallingPartsBackdropWrap>{flakes}</S.FallingPartsBackdropWrap>;
};

export default FallingPieces;
