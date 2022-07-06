import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const GoToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  function goToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <AnimatePresence>
        {scrollPosition > 100 && (
          <motion.div
            className="scrollToTop-btn"
            onClick={goToTop}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 1 }}
          >
            <div className="up-arrow-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 55 55"
              >
                <g id="uparrow" transform="translate(1522 113)">
                  <circle
                    id="Ellipse_29"
                    data-name="Ellipse 29"
                    cx="27.5"
                    cy="27.5"
                    r="27.5"
                    transform="translate(-1522 -113)"
                    fill="#febe1e"
                  />
                  <path
                    id="Polygon_15"
                    data-name="Polygon 15"
                    d="M8,0l8,14H0Z"
                    transform="translate(-1502 -94)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
