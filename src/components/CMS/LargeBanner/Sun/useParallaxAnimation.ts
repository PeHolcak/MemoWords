import { useTransform, useScroll } from 'framer-motion';

import useDimensions from 'src/hooks/useDimensions';

const DEFAULT_DIMENSIONS_HEIGHT = 1280;

export const useParallaxAnimation = (threshold: number) => {
  const dimensions = useDimensions();
  const { scrollY } = useScroll();
  const dimensionsHeight = dimensions.height ?? DEFAULT_DIMENSIONS_HEIGHT;

  const translateX = useTransform(
    scrollY,
    [0, threshold],
    [-150, dimensions.width]
  );

  const translateY = useTransform(
    scrollY,
    [0, threshold / 2, threshold],
    [dimensionsHeight / 3, 0, dimensionsHeight / 3]
  );

  const background = useTransform(
    scrollY,
    [0, threshold / 2, threshold],
    ['#ede0a2', '#ffd500', '#ff8800']
  );

  return {
    translateX,
    translateY,
    background
  };
};
