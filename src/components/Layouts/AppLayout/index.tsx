import React from 'react';

import PageWrapper from '@components/PageWrapper';
import LeftToRight from '@components/Animations/LeftToRight';

import * as S from './styled';
import Header from './Header';
import Navbar from './Navbar';

export type AppLayoutProps = React.PropsWithChildren<{
  alignChildren?: 'start' | 'center' | 'end';
}>;

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  alignChildren = 'center'
}) => {
  return (
    <PageWrapper title="AppLayout" type="private">
      <S.AppLayoutWrapper>
        <Header />
        <S.ChildrenWrapper alignChildren={alignChildren}>
          <S.ChildrenContainer>
            <LeftToRight>
              <S.AnimationContainer>{children}</S.AnimationContainer>
            </LeftToRight>
          </S.ChildrenContainer>
        </S.ChildrenWrapper>
        <Navbar />
      </S.AppLayoutWrapper>
    </PageWrapper>
  );
};

export default AppLayout;
