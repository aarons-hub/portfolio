import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";

export const WorkPanel = () => {
  const [isHoveringPhoto, setIsHoveringPhoto] = useState(false);
  const [isHoveringGraphics, setIsHoveringGraphics] = useState(false);
  const [isHoveringWeb, setIsHoveringWeb] = useState(false);

  function handleMouseEnterPhoto(e) {
    setIsHoveringPhoto(true);
  }
  function handleMouseLeavePhoto(e) {
    setIsHoveringPhoto(false);
  }
  function handleMouseEnterGraphics(e) {
    setIsHoveringGraphics(true);
  }
  function handleMouseLeaveGraphics(e) {
    setIsHoveringGraphics(false);
  }
  function handleMouseEnterWeb(e) {
    setIsHoveringWeb(true);
  }
  function handleMouseLeaveWeb(e) {
    setIsHoveringWeb(false);
  }

  return (
    <>
      <div className="zone-container workpanel">
        <div className="zone-svg workpanel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1723.531"
            height="332"
            viewBox="0 0 1723.531 332"
          >
            <g
              id="Group_260"
              data-name="Group 260"
              transform="translate(-17720.5 -5702.5)"
            >
              <path
                id="path1450"
                d="M464,24.479v263.81a19.441,19.441,0,0,0,19.4,19.44l237.623.524a8.578,8.578,0,0,0,6.377-14.336l-86.792-95.841c-7.191-7.941-4.52-16.5,5.176-21.019,17.843-8.318,43.386-25.64,50.581-58.385,2.294-10.441,2.1-28.015.324-38.567-7.5-44.446-39.646-66.542-71.227-72.98C614.979,4.989,597.515,5.01,586.8,4.971c-32.965-.12-78.041-.025-103.4.048A19.472,19.472,0,0,0,464,24.479Z"
                transform="translate(18297.848 5707.675)"
                fill="#18262f"
                stroke="#707070"
                stroke-width="1"
              />
              <path
                id="Path_482"
                data-name="Path 482"
                d="M149.882,155.789,14.127,290.91A8.283,8.283,0,0,1,0,285.038V23.932A19.932,19.932,0,0,1,19.932,4H446.471a8.228,8.228,0,0,1,5.8,14.061L178.135,290.91a8.284,8.284,0,0,1-14.127-5.872V161.66a8.283,8.283,0,0,0-14.127-5.871Z"
                transform="translate(17721 5706.973)"
                fill="#18262f"
                stroke="#707070"
                stroke-width="1"
              />
              <circle
                id="Ellipse_18"
                data-name="Ellipse 18"
                cx="165.5"
                cy="165.5"
                r="165.5"
                transform="translate(18247 5703)"
                fill="#18262f"
                stroke="#707070"
                stroke-width="1"
              />
              <path
                id="path869"
                d="M750,23.932V289.024a19.932,19.932,0,0,0,19.932,19.932H991.174a8.279,8.279,0,0,0,5.866-14.122L873.292,170.6a20.01,20.01,0,0,1,0-28.243L997.04,18.121A8.279,8.279,0,0,0,991.174,4H769.932A19.932,19.932,0,0,0,750,23.932Z"
                transform="translate(18443.957 5706.973)"
                fill="#18262f"
                stroke="#707070"
                stroke-width="1"
              />
            </g>
          </svg>
        </div>
        <div className="zone-content workpanel">
          <div className="zone-svg-heading workpanel">
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
          <div className="zone-inner workpanel">
            <h1 className="zone-heading">Work</h1>
            <div id="workpanel" className="work-panel-btns-wrapper">
              <div
                className={`work-panel-btn ${isHoveringPhoto ? "active" : ""}`}
                onMouseEnter={handleMouseEnterPhoto}
                onMouseLeave={handleMouseLeavePhoto}
              >
                <span className="overlay"></span>
                <span className="tile-title">Photography</span>
                <Link to="/category/Photography"></Link>
                <img src="../images/photography.png" alt="photography" />
              </div>
              <div
                className={`work-panel-btn ${
                  isHoveringGraphics ? "active" : ""
                }`}
                onMouseEnter={handleMouseEnterGraphics}
                onMouseLeave={handleMouseLeaveGraphics}
              >
                <span className="overlay"></span>
                <span className="tile-title">Graphics</span>
                <Link to="/category/Graphics"></Link>
                <img src="../images/graphic.png" alt="photography" />
              </div>
              <div
                className={`work-panel-btn ${isHoveringWeb ? "active" : ""}`}
                onMouseEnter={handleMouseEnterWeb}
                onMouseLeave={handleMouseLeaveWeb}
              >
                <span className="overlay"></span>
                <span className="tile-title">Web</span>
                <Link to="/category/Web"></Link>
                <img src="../images/web.png" alt="photography" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
