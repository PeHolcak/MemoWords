import React, { useState, useEffect, useContext } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { ThemeContext } from 'styled-components';

import useDimensions from 'src/hooks/useDimensions';

import ParallaxAnimation from './Sun';
import * as S from './styled';
import FallingPartsBackdrop from './FallingPartsBackdrop';
import Article from './Article';
import Cloud from './Cloud';

type LargeBannerProps = {
  header: string;
  description: string;
  badgeText: string;
  imageUrl: string;
  isSidebarOpen: boolean;
};

const LargeBanner: React.FC<LargeBannerProps> = ({
  header,
  description,
  badgeText,
  imageUrl,
  isSidebarOpen
}) => {
  const [scrollY, setScrollY] = useState(0);
  const { width, height } = useDimensions();
  const themeData = useContext(ThemeContext);

  const dimensionsHeight = height ?? 1024;
  const threshold = dimensionsHeight * 5;

  const { scrollY: scrollYA } = useScroll();

  const transformGradientInput = [0, (threshold * 4) / 5, threshold];

  const firstBackgroundGradientColor = useTransform(
    scrollYA,
    transformGradientInput,
    themeData?.colors.largeBannerColors.top ?? []
  );

  const secondBackgroundGradientColor = useTransform(
    scrollYA,
    transformGradientInput,
    themeData?.colors.largeBannerColors.bottom ?? []
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFrozen = scrollY < threshold - dimensionsHeight;

  const ARTICLES = [
    {
      header: 'Exploring the New Tech Frontier',
      description:
        'A deep dive into emerging technologies that are set to revolutionize the current landscape.',
      badgeText: 'New'
    },
    {
      header: 'The Art of Culinary Innovation',
      description:
        'Discover how chefs around the world are using science to create unprecedented dishes.',
      badgeText: 'Trending'
    },
    {
      header: 'Unlocking the Secrets of the Ocean',
      description:
        'An exploration of the latest discoveries in oceanography and marine biology.',
      badgeText: 'Featured'
    },
    {
      header: "Into the Wild: Nature's Untold Stories",
      description:
        'Join us on a journey to uncover the hidden wonders and secrets of untouched natural habitats.',
      badgeText: 'Explore'
    }
  ];

  return (
    <S.LargeBannerWrapper $height={threshold} $isSidebarOpen={isSidebarOpen}>
      <S.LargeBannerContainer
        $isFrozen={isFrozen}
        $isSidebarOpen={isSidebarOpen}
        style={{
          background: `linear-gradient(to bottom, ${firstBackgroundGradientColor.get()}, transparent),
          radial-gradient(ellipse at bottom, ${secondBackgroundGradientColor.get()}, transparent)`
        }}
      >
        {ARTICLES.map((article, index) => {
          const visiblityLength = threshold / ARTICLES.length;

          const createVariantType = () => {
            if (scrollY < visiblityLength * index) {
              return 'initial';
            } else if (scrollY >= visiblityLength * (index + 1)) {
              return 'hidden';
            }
            return 'visible';
          };
          return (
            <S.ArticleWrapper index={index}>
              <Article
                key={`article_${index}`}
                header={article.header}
                description={article.description}
                badgeText={article.badgeText}
                variantType={createVariantType()}
              />
            </S.ArticleWrapper>
          );
        })}
        <ParallaxAnimation threshold={threshold} />
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
          animate={{ y: '100vh', opacity: 1 }}
          transition={{ delay: 5, type: 'ease', stiffness: 100 }}
        >
          <S.Forests src="/images/LargeBanner/forests.svg" />
        </motion.div>
      </S.LargeBannerContainer>
    </S.LargeBannerWrapper>
  );
};

export default LargeBanner;
