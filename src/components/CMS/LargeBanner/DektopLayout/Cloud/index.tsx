import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import * as S from './styled';

type ResultTupples = [number, number];

type ParallaxAnimationProps = {
  initialWidth?: number;
  initialHeight?: number;
  initialPosition?: {
    x: number;
    y: number;
  };
  threshold: number;
  translateXResult: ResultTupples;
  translateYResult: ResultTupples;
  rotateResult: ResultTupples;
  scaleResult: ResultTupples;
};

const DEFAULT_DIMENSIONS_WIDTH = 1280;

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({
  threshold,
  translateXResult,
  translateYResult,
  rotateResult,
  scaleResult
}) => {
  const { scrollY } = useScroll();

  const translateX = useTransform(scrollY, [0, threshold], translateXResult);
  const translateY = useTransform(scrollY, [0, threshold], translateYResult);
  const rotate = useTransform(scrollY, [0, threshold], rotateResult);
  const scale = useTransform(scrollY, [0, threshold], scaleResult);
  const opacity = useTransform(scrollY, [0, threshold], [0, 1]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        x: translateX,
        y: translateY,
        scale,
        opacity,
        rotate // Applying the rotation
      }}
    >
      <S.Cloud $color="#FFFFFF">
        <S.CloudPart className="cloud-part" $top={0} $left={0} />
        <S.CloudPart className="cloud-part" $top={30} $left={10} />
        <S.CloudPart className="cloud-part" $top={15} $left={100} />
        <S.CloudPart className="cloud-part" $top={0} $left={150} />
        <S.CloudPart className="cloud-part" $top={-20} $left={190} />
        <S.CloudPart className="cloud-part" $top={-40} $left={130} />
        <S.CloudPart className="cloud-part" $top={-40} $left={70} />
      </S.Cloud>
    </motion.div>
  );
};

export default ParallaxAnimation;
