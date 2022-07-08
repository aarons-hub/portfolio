import React from "react";
import { About } from "./About";
import { Welcome } from "./Welcome";
import { Tools } from "./Tools";
import { Contact } from "./Contact";
import { Spacer } from "./Spacer";
import { WorkLandingPage } from "./WorkLandingPage";
import { History } from "./History";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 });
    } else {
      animation.start({ opacity: 0 });
    }
    // console.log("use effect hook", inView);
  }, [inView]);

  return (
    <>
      <Welcome />
      <Spacer />
      <About />
      <Spacer />
      <WorkLandingPage />
      <Spacer />
      <History />
      <Spacer />
      <Tools />
      <Spacer />
      <Contact />
    </>
  );
};
