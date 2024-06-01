import { useState } from 'react';

import PageWrapper from '@components/PageWrapper';

import Sidebar from 'src/components/Pages/HomePage/SideBar';

import MobileMenu from './MobileMenu';
import Footer from './Footer';
import * as S from './styled';
import TabletOnlyUp from '@components/Containers/TabletOnlyUp';
import TabletonlyDown from '@components/Containers/TabletOnlyDown';

type LobbyLayoutProps = React.PropsWithChildren<{
  renderPrimaryBanner?: (isSidebarOpen: boolean) => React.ReactNode;
}>;

const LobbyLayout: React.FC<LobbyLayoutProps> = ({
  children,
  renderPrimaryBanner
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const onSidebarOpenHandler = () => {
    setIsSidebarOpen(true);
  };

  const onSidebarCloseHandler = () => {
    setIsSidebarOpen(false);
  };

  const primaryBanner = renderPrimaryBanner
    ? renderPrimaryBanner(isSidebarOpen)
    : null;

  return (
    <PageWrapper type="public" title="MemoWords">
      {primaryBanner}
      <S.LayoutWrapper $isSidebarOpen={isSidebarOpen}>
        <S.LayoutContainer>
          {children}
          <Footer />
        </S.LayoutContainer>
        <S.Divider />
      </S.LayoutWrapper>
      <TabletOnlyUp>
        <Sidebar
          onSidebarOpenHandler={onSidebarOpenHandler}
          onSidebarCloseHandler={onSidebarCloseHandler}
          isSidebarOpen={isSidebarOpen}
        />
      </TabletOnlyUp>
      <TabletonlyDown>
        <MobileMenu />
      </TabletonlyDown>
    </PageWrapper>
  );
};

export default LobbyLayout;
