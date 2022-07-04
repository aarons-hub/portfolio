import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <div className="zone-container about">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(1000px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          className="zone-content about"
        >
          <div className="zone-svg-heading about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="996.926"
              height="166"
              viewBox="0 0 996.926 166"
            >
              <g
                id="Group_253"
                data-name="Group 253"
                transform="translate(-19391 -4840)"
              >
                <circle
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="83"
                  cy="83"
                  r="83"
                  transform="translate(19799 4840)"
                  fill="#febe1e"
                />
                <path
                  id="Path_478"
                  data-name="Path 478"
                  d="M299.479,162H235a10,10,0,0,1-10-10V15A10,10,0,0,1,235,5h54.479c5.523,0,14.53-.115,19.936.97A49.582,49.582,0,0,1,348.11,44.462a59.539,59.539,0,0,1,.019,19.863,27.853,27.853,0,0,0,2.861,17.384,53.774,53.774,0,0,1,5.324,39.9,65.03,65.03,0,0,1-8.421,18.014,53.775,53.775,0,0,1-34.032,21.508,64.894,64.894,0,0,1-14.382.684Z"
                  transform="translate(19381 4839.003)"
                  fill="#febe1e"
                />
                <path
                  id="Path_479"
                  data-name="Path 479"
                  d="M85.45,8.955l72.1,145.09A6.2,6.2,0,0,1,152,163H10a6.2,6.2,0,0,1-5.55-8.955L76.55,8.955a4.969,4.969,0,0,1,8.9,0Z"
                  transform="translate(19387.197 4838.803)"
                  fill="#febe1e"
                />
                <path
                  id="path875"
                  d="M629.366,7.477,691.607,77.2a8.926,8.926,0,0,0,13.318,0l62.485-70a3.857,3.857,0,0,1,6.734,2.539l.488,64.924c.042,5.523-.426,14.461-1.637,19.847-4.322,19.227-18.75,60.395-63.61,66.152a101.291,101.291,0,0,1-19.953.178c-45.1-5.022-60.243-46.926-64.872-66.355-1.28-5.37-1.853-14.3-1.853-19.822V10.016a3.814,3.814,0,0,1,6.659-2.54Z"
                  transform="translate(19403.293 4839.087)"
                  fill="#febe1e"
                />
                <path
                  id="Path_481"
                  data-name="Path 481"
                  d="M871.209,149.252V96.293a9.752,9.752,0,0,0-9.752-9.752h-3.706A9.752,9.752,0,0,1,848,76.789V11.752A9.752,9.752,0,0,1,857.752,2h111.17a9.752,9.752,0,0,1,9.752,9.752V76.789a9.752,9.752,0,0,1-9.752,9.752h-2.849a9.752,9.752,0,0,0-9.752,9.752v52.959A9.752,9.752,0,0,1,946.57,159H880.961a9.752,9.752,0,0,1-9.752-9.752Z"
                  transform="translate(19409.252 4842)"
                  fill="#febe1e"
                />
              </g>
            </svg>
          </div>
          <div className="zone-inner about">
            <div className="zone-row">
              <div className="imag-col">
                <img
                  src="/portfolio/images/my-pic.png"
                  alt="mono-me"
                  loading="lazy"
                  className="image-about"
                />
              </div>
              <div className="zone-col">
                <p>
                  My name is Aaron Sanders. I'm a self-taught web designer -
                  developer, photographer and graphic artist from Brisbane
                  Australia.
                </p>
                <div className="zone-col-row">
                  <div className="zone-col">
                    <p className="intro">
                      I take delight in seeing something I&nbsp;have been
                      responsible for become something of worth to a business.
                      I&nbsp;take very seriously the value of corporate image
                      and brand and do everything I can to keep or uplift that
                      brand integrity.
                    </p>
                  </div>
                  <div className="zone-col">
                    <p className="para">
                      I have acquired knowledge that spans well over twenty
                      years, I'm independently motivated to keep up with the
                      dynamic digital landscape. I&nbsp;love solving programming
                      challenges... there's always a way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
