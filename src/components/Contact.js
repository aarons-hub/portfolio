import React from "react";
import { Email } from "./Email";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <>
      <div className="zone-container contact">
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
          className="zone-content contact"
        >
          <motion.div
            initial={{ transform: "translateY(3000px)" }}
            animate={{
              transform: "translateY(0px)",
              transition: { duration: 1.5 },
            }}
            exit={{ opacity: 0 }}
          >
            <div className="zone-svg-heading contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1270.776"
                height="151.416"
                viewBox="0 0 1270.776 151.416"
              >
                <g
                  id="Group_255"
                  data-name="Group 255"
                  transform="translate(-19384.06 -5827.5)"
                >
                  <path
                    id="Path_478"
                    data-name="Path 478"
                    d="M76.354,8.623l63.951,127.113a5.473,5.473,0,0,1-4.889,7.933H9.31a5.473,5.473,0,0,1-4.889-7.933L68.372,8.623a4.468,4.468,0,0,1,7.983,0Z"
                    transform="translate(20152.793 5829.773)"
                    fill="#febe1e"
                  />
                  <path
                    id="Ellipse_3"
                    data-name="Ellipse 3"
                    d="M75.486,0c41.69,0,75.486,33.2,75.486,74.154s-33.8,74.154-75.486,74.154S0,115.108,0,74.154,33.8,0,75.486,0Z"
                    transform="translate(19567.838 5830.608)"
                    fill="#febe1e"
                  />
                  <path
                    id="Path_481"
                    data-name="Path 481"
                    d="M1029.337,143.539H921.881A8.881,8.881,0,0,1,913,134.658V13.881A8.881,8.881,0,0,1,921.881,5h67.671c4.9,0,11.716,2.788,15.177,6.263q4.609,4.629,7.737,7.925c3.374,3.556,5.533,2.69,5.519-2.212,0-.965,0-2,.009-3.1A9.019,9.019,0,0,1,1027.01,5h2.327a8.881,8.881,0,0,1,8.881,8.881V134.658a8.88,8.88,0,0,1-8.88,8.881Z"
                    transform="translate(18869.75 5830.937)"
                    fill="#febe1e"
                  />
                  <path
                    id="Path_481-2"
                    data-name="Path 481"
                    d="M869.136,136.1V87.87a8.881,8.881,0,0,0-8.881-8.881h-3.375A8.881,8.881,0,0,1,848,70.109V10.881A8.881,8.881,0,0,1,856.881,2h101.24A8.881,8.881,0,0,1,967,10.881V70.109a8.881,8.881,0,0,1-8.881,8.881h-2.594a8.881,8.881,0,0,0-8.881,8.881V136.1a8.881,8.881,0,0,1-8.881,8.881H878.017a8.881,8.881,0,0,1-8.881-8.881Z"
                    transform="translate(19137.23 5831.272)"
                    fill="#febe1e"
                  />
                  <path
                    id="Path_481-3"
                    data-name="Path 481"
                    d="M869.136,136.1V87.87a8.881,8.881,0,0,0-8.881-8.881h-3.375A8.881,8.881,0,0,1,848,70.109V10.881A8.881,8.881,0,0,1,856.881,2h101.24A8.881,8.881,0,0,1,967,10.881V70.109a8.881,8.881,0,0,1-8.881,8.881h-2.594a8.881,8.881,0,0,0-8.881,8.881V136.1a8.881,8.881,0,0,1-8.881,8.881H878.017a8.881,8.881,0,0,1-8.881-8.881Z"
                    transform="translate(19687.834 5831.272)"
                    fill="#febe1e"
                  />
                  <path
                    id="path987"
                    d="M86.282,13.142c.018,17.48,0,45.378-.007,59.087a22.55,22.55,0,0,0,5.753,13.9l42.239,42.239c3.181,3.181,3.285,8.462-.2,11.306a76.358,76.358,0,0,1-40.118,16.808,87.187,87.187,0,0,1-16.255-.133C47.223,152.6,13.783,128.947,10.014,87.948a97.437,97.437,0,0,1,.111-16.263C14.577,31.468,50.349,9.425,78.153,5.6a7.322,7.322,0,0,1,8.13,7.543Z"
                    transform="translate(19374.332 5821.969)"
                    fill="#febe1e"
                  />
                  <path
                    id="path987-2"
                    data-name="path987"
                    d="M86.282,13.142c.018,17.48,0,45.378-.007,59.087a22.55,22.55,0,0,0,5.753,13.9l42.239,42.239c3.181,3.181,3.285,8.462-.2,11.306a76.358,76.358,0,0,1-40.118,16.808,87.187,87.187,0,0,1-16.255-.133C47.223,152.6,13.783,128.947,10.014,87.948a97.437,97.437,0,0,1,.111-16.263C14.577,31.468,50.349,9.425,78.153,5.6a7.322,7.322,0,0,1,8.13,7.543Z"
                    transform="translate(20347.895 5821.969)"
                    fill="#febe1e"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
          <div className="zone-inner contact">
            <div className="zone-row">
              <div className="zone-col">
                <Email />
              </div>
              <div className="zone-col email">
                <h2>Email me at</h2>
                <a
                  className="contact"
                  href="mailto:aaron.leigh.sanders@gmail.com"
                >
                  aaron.leigh.sanders@gmail.com
                </a>
                <div className="phone-container">
                  <h2>Call me at</h2>
                  <a className="contact" href="tel:0424854380">
                    0424 854 390
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
