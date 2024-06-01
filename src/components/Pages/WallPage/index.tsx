import React from "react";
import type { NextPage } from "next";

import PageWrapper from "@components/PageWrapper";
import AppLayout from "@components/Layouts/AppLayout";

import Feed from "./Feed";
import * as S from "./styled";

const WallPage: NextPage = () => {
  return (
    <PageWrapper title="Wall" type="private">
      <AppLayout>
        <S.FeedWrapper>
          <Feed feedType="AdviceTips" />
          <Feed feedType="EventAnnouncement" />
          <Feed feedType="JobVacancy" />
          <Feed feedType="MaterialRequest" />
          <Feed feedType="ProjectCollaboration" />
          <Feed feedType="ServiceOffer" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
          <Feed feedType="AdviceTips" />
        </S.FeedWrapper>
      </AppLayout>
    </PageWrapper>
  );
};

export default WallPage;
