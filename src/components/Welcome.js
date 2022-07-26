import React from "react";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export const Welcome = () => {
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
            <h1 className="zone-heading">
              Hi, i'm Aaron
              <br />
              how may I&nbsp;help you?
            </h1>
          </motion.div>

          <div className="svg-welcome">
            <motion.svg
              variants={welcomeWrapper}
              initial="hidden"
              animate="visible"
              xmlns="http://www.w3.org/2000/svg"
              width="840"
              height="162"
              viewBox="0 0 840 162"
            >
              <g
                id="Group_647"
                data-name="Group 647"
                transform="translate(-3685 -3062.758)"
              >
                <ellipse
                  id="Ellipse_23"
                  data-name="Ellipse 23"
                  cx="81.5"
                  cy="81"
                  rx="81.5"
                  ry="81"
                  transform="translate(4362 3062.758)"
                  fill="#febe1e"
                />
                <rect
                  id="Rectangle_492"
                  data-name="Rectangle 492"
                  width="90"
                  height="151"
                  rx="9"
                  transform="translate(4095 3068.758)"
                  fill="#febe1e"
                />
                <path
                  id="Subtraction_17"
                  data-name="Subtraction 17"
                  d="M127.5,149H8.5A8.5,8.5,0,0,1,0,140.513V8.487A8.5,8.5,0,0,1,8.5,0h119A8.5,8.5,0,0,1,136,8.487V22.447a7.558,7.558,0,0,1-7.518,6.786h-4.251a8.5,8.5,0,0,0-8.5,8.488V51.868a8.5,8.5,0,0,0,8.5,8.487h4.251A7.562,7.562,0,0,1,136,67.131V77.156a7.561,7.561,0,0,1-7.517,6.774h-4.251a8.5,8.5,0,0,0-8.5,8.488v14.146a8.5,8.5,0,0,0,8.5,8.487h4.251A7.565,7.565,0,0,1,136,121.815v18.7A8.5,8.5,0,0,1,127.5,149Z"
                  transform="translate(3917 3068.758)"
                  fill="#febe1e"
                />
                <rect
                  id="Rectangle_732"
                  data-name="Rectangle 732"
                  width="90"
                  height="151"
                  rx="9"
                  transform="translate(4229 3068.758)"
                  fill="#febe1e"
                />
                <g
                  id="Group_275"
                  data-name="Group 275"
                  transform="translate(3685 3069.104)"
                >
                  <rect
                    id="Rectangle_493"
                    data-name="Rectangle 493"
                    width="90"
                    height="151"
                    rx="9"
                    transform="translate(0 -0.346)"
                    fill="#febe1e"
                  />
                  <rect
                    id="Rectangle_494"
                    data-name="Rectangle 494"
                    width="89"
                    height="151"
                    rx="9"
                    transform="translate(98 -0.346)"
                    fill="#febe1e"
                  />
                </g>
              </g>
            </motion.svg>
          </div>
        </div>
      </div>
    </>
  );
};
