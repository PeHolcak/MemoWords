import React from "react";
import { Tabs } from "antd";

import HomeLayout from "@components/Layout/HomeLayout";

import Informations from "./Informations";
import Matches from "./Matches";
import Messages from "./Messages";

const { TabPane } = Tabs;

export type User = {
  email: string;
  firstName: string;
  lastName: string;
}


const UserDetail: React.FC = () => {
  const user = {
    email: "sdasdasdas",
    firstName: "dasdas",
    lastName: "dsad",
  };


  return (
    <HomeLayout>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Detaily uživatele" key="1">
          <Informations
            email={user.email}
            firstName={user.firstName}
            lastName={user.lastName}
          />
        </TabPane>
        <TabPane tab="Spojení" key="2">
          <Matches />
        </TabPane>
        <TabPane tab="Zprávy" key="3">
          <Messages />
        </TabPane>
      </Tabs>
    </HomeLayout>
  );
};

export default UserDetail;
