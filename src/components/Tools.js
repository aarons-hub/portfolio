import React from "react";
import { motion } from "framer-motion";

export const Tools = () => {
  return (
    <>
      <div className="zone-container tools">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(1000px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          className="zone-content tools"
        >
          <div className="zone-svg-heading tools">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1154.723"
              height="194"
              viewBox="0 0 1154.723 194"
            >
              <g
                id="Group_256"
                data-name="Group 256"
                transform="translate(-19114.252 -5749)"
              >
                <circle
                  id="Ellipse_22"
                  data-name="Ellipse 22"
                  cx="97"
                  cy="97"
                  r="97"
                  transform="translate(19348 5749)"
                  fill="#febe1e"
                />
                <circle
                  id="Ellipse_23"
                  data-name="Ellipse 23"
                  cx="97"
                  cy="97"
                  r="97"
                  transform="translate(19612 5749)"
                  fill="#febe1e"
                />
                <path
                  id="Path_484"
                  data-name="Path 484"
                  d="M1030.86,184.031a85.606,85.606,0,0,1-27.245-14.5c-4.326-3.429-4.29-9.821-.385-13.726L1110.71,48.331c3.905-3.905,10.3-3.94,13.726.386a85.61,85.61,0,0,1,14.495,27.244,104.119,104.119,0,0,1,3.8,19.591,86.254,86.254,0,0,1-2.848,29.416,103.839,103.839,0,0,1-7.493,18.495,85.9,85.9,0,0,1-49.306,40.569,104.09,104.09,0,0,1-19.591,3.794,86.486,86.486,0,0,1-13.039,0,104,104,0,0,1-19.591-3.794ZM977.7,108.9a86.028,86.028,0,0,1,27.363-88.626,104.458,104.458,0,0,1,16.631-11.028,86.028,86.028,0,0,1,92.288,9.287c4.325,3.43,4.292,9.819.387,13.724L1006.88,139.741c-3.905,3.905-10.3,3.941-13.727-.384a85.48,85.48,0,0,1-7.947-11.967,104.42,104.42,0,0,1-7.515-18.487Z"
                  transform="translate(19126 5752.044)"
                  fill="#febe1e"
                />
                <path
                  id="Path_485"
                  data-name="Path 485"
                  d="M765.666,194.536H759a10,10,0,0,1-10-10v-162a10,10,0,0,1,10-10h73.334a10,10,0,0,1,10,10V96.6a10,10,0,0,0,10,10H859a10,10,0,0,1,10,10v67.933a10,10,0,0,1-10,10H765.666Z"
                  transform="translate(19126 5742.464)"
                  fill="#febe1e"
                />
                <path
                  id="Path_481"
                  data-name="Path 481"
                  d="M874.842,172.3V111.053a11.278,11.278,0,0,0-11.278-11.278h-4.286A11.278,11.278,0,0,1,848,88.5V13.278A11.278,11.278,0,0,1,859.278,2H987.85a11.278,11.278,0,0,1,11.278,11.278V88.5a11.278,11.278,0,0,1-11.278,11.278h-3.295a11.278,11.278,0,0,0-11.278,11.278V172.3A11.278,11.278,0,0,1,962,183.58H886.12A11.278,11.278,0,0,1,874.842,172.3Z"
                  transform="translate(18266.252 5754)"
                  fill="#febe1e"
                />
              </g>
            </svg>
          </div>
          <div className="zone-inner tools">
            <div className="icons-wrapper">
              <img src="/portfolio/images/html-icon.png" />
              <img src="/portfolio/images/css-icon.png" />
              <img src="/portfolio/images/js-icon.png" />
              <img src="/portfolio/images/mysql-icon.png" />
              <img src="/portfolio/images/visual-studio-icon.png" />
              <img src="/portfolio/images/xd-icon.png" />
              <img src="/portfolio/images/acrobat-icon.png" />
              <img src="/portfolio/images/bridge-icon.png" />
              <img src="/portfolio/images/dimensions-icon.png" />
              <img src="/portfolio/images/dreamweaver-icon.png" />
              <img src="/portfolio/images/illustrator-icon.png" />
              <img src="/portfolio/images/indesign-icon.png" />
              <img src="/portfolio/images/jquery-icon.png" />
              <img src="/portfolio/images/git-icon.png" />
            </div>
            <div className="tools-description">
              <p>
                Dev Skills: HTML5, CSS3 and Less, JavaScript, JQuery, Bootstrap,
                Git, Responsive, Mobile-First Design, React.
              </p>
              <p>
                I've been using LinkedIn Learning and other free resources for
                my education.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
