import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutApp from "../component/AboutApp";
import AboutAuthor from "../component/AboutAuthor";
import About from "../component/Pages/About";
import ErrorPage from "../component/Pages/ErrorPage";
import Home from "../component/Pages/Home";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />}>
          <Route path="about-App" element={<AboutApp />} />
          <Route path="about-author" element={<AboutAuthor />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
