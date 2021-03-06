import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, BrowsePage, SignUp, SignIn, NotFoundPage } from "./pages";
import * as ROUTES from "./routes/route.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}></Route>
          <Route path={ROUTES.BROWSE} element={<BrowsePage />}></Route>
          <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
          <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
