import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import {routes} from "@constants/routes"

import SubPages from "./SubPages";

const { Users, Dashboard, UserDetail, MainPage } = SubPages;

const Home: React.FC = () => {
  return (
      <Routes>
        <Route path={routes.dashboard} element={<Dashboard />} />
        <Route path={routes.users} element={<Users />} />
        <Route path={routes.userDetail} element={<UserDetail />} />
        <Route path={routes.mainPage} element={<MainPage />} />
        <Route index element={<Outlet />} />
      </Routes>
  );
};

export default Home;
