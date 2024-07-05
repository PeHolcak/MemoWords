import React, { useEffect, useState } from 'react';

import TabletOnlyDown from '@components/Containers/TabletOnlyDown';
import TabletOnlyUp from '@components/Containers/TabletOnlyUp';

import useDimensions from 'src/hooks/useDimensions';

import Article from './Article';
import DesktopLayout from './DektopLayout';
import * as S from './styled';
import MobileLayout from './MobileLayout';

type LargeBannerProps = {
  header: string;
  description: string;
  badgeText: string;
  imageUrl: string;
  isSidebarOpen: boolean;
};

const LargeBanner: React.FC<LargeBannerProps> = ({ isSidebarOpen }) => {
  const { width, height } = useDimensions();
  const dimensionsHeight = height ?? 1024;
  const threshold = dimensionsHeight * 5;

  const [scrollY, setScrollY] = useState(0);

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
    },
    {
      header: "Into the Wild: Nature's Untold Stories",
      description:
        'Join us on a journey to uncover the hidden wonders and secrets of untouched natural habitats.',
      badgeText: 'Explore'
    },
    {
      header: 'last',
      description:
        'Join us on a journey to uncover the hidden wonders and secrets of untouched natural habitats.',
      badgeText: 'Explore'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = ARTICLES.map((article, index) => {
    const visiblityLength = (threshold - 400) / ARTICLES.length;

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
  });

  return (
    <>
      <TabletOnlyDown>
        <MobileLayout
          isSidebarOpen={isSidebarOpen}
          dimensionsHeight={dimensionsHeight}
          threshold={threshold}
          scrollY={scrollY}
        >
          {content}
        </MobileLayout>
      </TabletOnlyDown>
      <TabletOnlyUp>
        <DesktopLayout
          isSidebarOpen={isSidebarOpen}
          width={width}
          height={height}
          dimensionsHeight={dimensionsHeight}
          threshold={threshold}
          scrollY={scrollY}
        >
          {content}
        </DesktopLayout>
      </TabletOnlyUp>
    </>
  );
};

export default LargeBanner;
