import LargeBanner from '@components/CMS/LargeBanner';

import LobbyLayout from 'src/components/Layouts/LobbyLayout';

import * as S from './styled';

const HomePageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const renderPrimaryBanner = (isSidebarOpen: boolean) => {
    return (
      <LargeBanner
        header="Discover Our New Collection"
        description="Check out our latest arrivals and find the perfect style for you."
        badgeText="New"
        imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        isSidebarOpen={isSidebarOpen}
      />
    );
  };

  return (
    <S.LobbyLayoutWrapper>
      <LobbyLayout renderPrimaryBanner={renderPrimaryBanner}>
        {children}
      </LobbyLayout>
    </S.LobbyLayoutWrapper>
  );
};

export default HomePageLayout;
