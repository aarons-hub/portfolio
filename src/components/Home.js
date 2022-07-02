import React from "react";
import { About } from "./About";
import { Welcome } from "./Welcome";
import { WorkPanel } from "./WorkPanel";
import { Tools } from "./Tools";
import { Contact } from "./Contact";
import { Spacer } from "./Spacer";
import { Header } from "./Header";

export const Home = () => {
  return (
    <>
      <Welcome />
      <Spacer />
      <About />
      <Spacer />
      <WorkPanel />
      <Spacer />
      <Tools />
      <Spacer />
      <Contact />
      <Spacer />
    </>
  );
};
