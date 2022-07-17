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
import { useEffect, useState, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useParallax, Parallax } from "react-scroll-parallax";

export const Home = () => {
  return (
    <>
      <Welcome />
    </>
  );
};
