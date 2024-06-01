import React from "react";

import PageWrapper from "@components/PageWrapper";
import LeftToRight from "@components/Animations/LeftToRight";

import * as S from "./styled";
import Header from "./Header";
import Navbar from "./Navbar";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <PageWrapper title="AppLayout" type="private">
      <S.AppLayoutWrapper>
        <Header />
        <S.ChildrenWrapper>
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
