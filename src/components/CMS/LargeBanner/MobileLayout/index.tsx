import React from 'react';

import * as SCommon from 'src/components/CMS/LargeBanner/styled';

type MobileLayoutProps = React.PropsWithChildren<{
  isSidebarOpen: boolean;
  dimensionsHeight: number;
  threshold: number;
  scrollY: number;
}>;

const MobileLayout: React.FC<MobileLayoutProps> = ({
  isSidebarOpen,
  threshold,
  dimensionsHeight,
  children,
  scrollY
}) => {
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
        >
          {children}
        </SCommon.LargeBannerContent>
      </SCommon.LargeBannerContainer>
    </SCommon.LargeBannerWrapper>
  );
};

export default MobileLayout;
