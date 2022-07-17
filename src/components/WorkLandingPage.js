import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const WorkLandingPage = () => {
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

  return (
    <div className="zone-container worklanding">
      <motion.div
        initial={{
          opacity: 0,
          transform: "translateY(1000px)",
          transition: { duration: 1 },
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 1 },
        }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="zone-content worklanding"
      >
        <motion.div
          initial={{ transform: "translateY(3000px)" }}
          animate={{
            transform: "translateY(0px)",
            transition: { duration: 1.5 },
          }}
          exit={{ opacity: 0 }}
        >
          <div className="zone-svg-heading worklanding">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="890.183"
              height="171"
              viewBox="0 0 890.183 171"
            >
              <g
                id="Group_239"
                data-name="Group 239"
                transform="translate(-17721 -5703)"
              >
                <path
                  id="path1450"
                  d="M464,15.025V151.369a10.047,10.047,0,0,0,10.025,10.047l122.809.271a4.433,4.433,0,0,0,3.3-7.409l-44.856-49.533c-3.717-4.1-2.336-8.527,2.675-10.863,9.222-4.3,22.423-13.251,26.142-30.175,1.186-5.4,1.087-14.479.167-19.932-3.874-22.971-20.49-34.39-36.812-37.718-5.417-1.1-14.442-1.094-19.979-1.114-17.037-.062-40.334-.013-53.442.025A10.063,10.063,0,0,0,464,15.025Z"
                  transform="translate(17794.936 5703.042)"
                  fill="#febe1e"
                />
                <path
                  id="Path_482"
                  data-name="Path 482"
                  d="M77.462,82.448,7.3,152.282A4.281,4.281,0,0,1,0,149.247V14.3A10.3,10.3,0,0,1,10.3,4H230.747a4.253,4.253,0,0,1,3,7.267L92.065,152.282a4.281,4.281,0,0,1-7.3-3.035V85.483a4.281,4.281,0,0,0-7.3-3.034Z"
                  transform="translate(17721 5703.121)"
                  fill="#febe1e"
                />
                <circle
                  id="Ellipse_18"
                  data-name="Ellipse 18"
                  cx="85.5"
                  cy="85.5"
                  r="85.5"
                  transform="translate(17993 5703)"
                  fill="#febe1e"
                />
                <path
                  id="path869"
                  d="M750,14.3V151.307a10.3,10.3,0,0,0,10.3,10.3H874.645a4.279,4.279,0,0,0,3.031-7.3L813.72,90.1a10.342,10.342,0,0,1,0-14.6L877.676,11.3A4.279,4.279,0,0,0,874.645,4H760.3A10.3,10.3,0,0,0,750,14.3Z"
                  transform="translate(17732.26 5703.121)"
                  fill="#febe1e"
                />
              </g>
            </svg>
          </div>
        </motion.div>
        <div className="zone-inner worklanding">
          <ButtonsList />
        </div>
      </motion.div>
    </div>
  );
};
