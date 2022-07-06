import React from "react";
import { About } from "./About";
import { Welcome } from "./Welcome";
import { Tools } from "./Tools";
import { Contact } from "./Contact";
import { Spacer } from "./Spacer";
import { WorkLandingPage } from "./WorkLandingPage";

export const Home = () => {
  return (
    <>
      <Welcome />
      <Spacer />
      <About />
      <Spacer />
      <WorkLandingPage />
      <Spacer />
      <Tools />
      <Spacer />
      <Contact />
    </>
  );
};
