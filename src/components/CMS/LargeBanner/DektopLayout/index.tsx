import React, { useContext } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ThemeContext as StyledThemeContext } from 'styled-components';

import ThemeContext from '@contexts/ThemeContext';

import * as SCommon from 'src/components/CMS/LargeBanner/styled';

import Sun from './Planets/Sun';
import Moon from './Planets/Moon';
import * as S from './styled';
import FallingPartsBackdrop from './FallingPartsBackdrop';
import Cloud from './Cloud';

type DesktopLayoutProps = React.PropsWithChildren<{
  isSidebarOpen: boolean;
  width: number;
  height: number;
  dimensionsHeight: number;
  threshold: number;
  scrollY: number;
}>;

const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  isSidebarOpen,
  threshold,
  dimensionsHeight,
  height,
  width,
  children,
  scrollY
}) => {
  const styledThemeData = useContext(StyledThemeContext);
  const themeData = useContext(ThemeContext);

  const { scrollY: scrollYA } = useScroll();

  const transformGradientInput = [0, (threshold * 4) / 5, threshold];

  const firstBackgroundGradientColor = useTransform(
    scrollYA,
    transformGradientInput,
    styledThemeData?.colors.largeBannerColors.top ?? []
  );

  const secondBackgroundGradientColor = useTransform(
    scrollYA,
    transformGradientInput,
    styledThemeData?.colors.largeBannerColors.bottom ?? []
  );

  const isFrozen = scrollY < threshold - dimensionsHeight;

  return (
    <SCommon.LargeBannerWrapper $isSidebarOpen={isSidebarOpen}>
      <SCommon.LargeBannerContainer
        $height={threshold}
        $isSidebarOpen={isSidebarOpen}
      >
        <SCommon.LargeBannerContent
          $isFrozen={isFrozen}
          $isSidebarOpen={isSidebarOpen}
          style={{
            background: `linear-gradient(to bottom, ${firstBackgroundGradientColor.get()}, transparent),
          radial-gradient(ellipse at bottom, ${secondBackgroundGradientColor.get()}, transparent)`
          }}
        >
          {children}
          {themeData.isDarkMode ? (
            <Moon threshold={threshold} />
          ) : (
            <Sun threshold={threshold} />
          )}
          <Cloud
            threshold={threshold}
            translateXResult={[width, 0]}
            translateYResult={[0, height]}
            rotateResult={[0, 20]}
            scaleResult={[1, 2.5]}
          />
          <Cloud
            threshold={threshold}
            translateXResult={[(width * 2) / 3, -width]}
            translateYResult={[0, height]}
            rotateResult={[0, 50]}
            scaleResult={[1, 3]}
          />
          <Cloud
            threshold={threshold}
            translateXResult={[width / 2, -200]}
            translateYResult={[height / 3, height]}
            rotateResult={[0, 0]}
            scaleResult={[1, 1]}
          />
          <FallingPartsBackdrop />
          <motion.div
            initial={{ y: '120vh', opacity: 0 }}
            animate={{ y: '100dvh', opacity: 1 }}
            transition={{ delay: 0.5, type: 'ease', stiffness: 100 }}
          >
            <S.Forests src="/images/LargeBanner/forests.svg" />
          </motion.div>
        </SCommon.LargeBannerContent>
      </SCommon.LargeBannerContainer>
      <S.BottomImage src="/images/LargeBanner/largebannerBottomImage.svg" />
    </SCommon.LargeBannerWrapper>
  );
};

export default DesktopLayout;
