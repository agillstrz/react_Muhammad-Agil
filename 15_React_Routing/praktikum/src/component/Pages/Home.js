import React from "react";
import Navbar from "../Navbar";
import TodoList from "../TodoList";

function Home() {
  return (
    <>
      <Navbar About="About" />
      <TodoList />
    </>
  );
}

export default Home;
