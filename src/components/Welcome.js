import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const Welcome = () => {
  const [data, setData] = useState([]);

  const API_URI = "/portfolio/data.json";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch(API_URI);
      const dataElements = await result.json();
      setData(dataElements);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Remove duplicates in list
  const categories = data.map((i) => i.category);
  const removeDuplicateCategory = [...new Set(categories)];

  const ButtonsList = () => (
    <>
      <div className="work-panel-btns-wrapper">
        {removeDuplicateCategory.map((i) => (
          <a href={`#/category/${i}`} key={i} className={`work-panel-btn ${i}`}>
            <div className="title">{i}</div>
          </a>
        ))}
      </div>
    </>
  );

  const welcomeWrapper = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const welcomeChildren = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className="zone-container welcome">
        <div className="zone-content welcome">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(-100px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateY(0px)",
              transition: { duration: 1 },
            }}
            exit={{ opacity: 0 }}
            className="zone-inner welcome"
          >
            <h1 className="zone-heading">Hello.</h1>
          </motion.div>
        </div>
        <div className="zone-inner worklanding">
          <ButtonsList />
        </div>
      </div>
    </>
  );
};
