import React from "react";

import HomeLayout from "@components/Layout/HomeLayout";

import UserTable from "./UserTable";

const Users: React.FC = () => {
  return (
    <HomeLayout>
      <h1>Vítejte v naší aplikaci!</h1>
      <p>Toto je hlavní obsahová oblast aplikace.</p>
      <UserTable />
    </HomeLayout>
  );
}

export default Users