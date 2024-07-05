import { useTransform, useScroll } from 'framer-motion';

import useDimensions from 'src/hooks/useDimensions';

const DEFAULT_DIMENSIONS_HEIGHT = 1280;

export const useParallaxAnimation = (threshold: number, colors: string[]) => {
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
    colors
  );

  const rotate = useTransform(scrollY, [0, threshold], [-40, 40]);

  return {
    translateX,
    translateY,
    background,
    rotate
  };
};
