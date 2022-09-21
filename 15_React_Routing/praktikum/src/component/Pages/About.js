import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import AboutApp from "../AboutApp";
import AboutAuthor from "../AboutAuthor";
import Navbar from "../Navbar";

function About() {
  return (
    <>
      <Navbar App="About-App" Author="About-Author" />
      <Outlet />
    </>
  );
}

export default About;
