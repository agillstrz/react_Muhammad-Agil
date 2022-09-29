import React from "react";
import errorpage from "../Img/errorpage.jpg";
import Navbar from "../Navbar";
function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center ">
        <img className="rounded-lg" src={errorpage} alt="" />
      </div>
    </>
  );
}

export default ErrorPage;
