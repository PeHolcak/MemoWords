import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import Home from "@pages/Home";
import About from "@pages/About";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import { queryClient } from "@utils/queryClient";

import {routes} from "@constants/routes"

import "./styles.css";

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.signIn} element={<SignIn />} />
          <Route path={routes.signUp} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
