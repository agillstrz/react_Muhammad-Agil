import React from "react";

function Hero() {
  return (
    <div className="h-screen mx-7 flex justify-center mt-10">
      <div className="text-center">
        <h1 className="text-2xl text-black font-bold">
          {" "}
          WELCOME TO OUR WEBSITE
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione!s
        </p>
        <button className="btn btn-primary bg-color2 text-white rounded-none">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
