import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <Link to="/">
          <div className="logo-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="143"
              height="22.74"
              viewBox="0 0 143 22.74"
            >
              <g
                id="Group_233"
                data-name="Group 233"
                transform="translate(-17564.397 -4796)"
              >
                <path
                  id="Path_478"
                  data-name="Path 478"
                  d="M14.956,6.54l9.806,19.49a.839.839,0,0,1-.75,1.216H4.676a.839.839,0,0,1-.75-1.216L13.732,6.54a.685.685,0,0,1,1.224,0Z"
                  transform="translate(17591.334 4790.676)"
                  fill="#febe1e"
                />
                <path
                  id="Path_478-2"
                  data-name="Path 478"
                  d="M14.956,6.54l9.806,19.49a.839.839,0,0,1-.75,1.216H4.676a.839.839,0,0,1-.75-1.216L13.732,6.54a.685.685,0,0,1,1.224,0Z"
                  transform="translate(17560.561 4790.676)"
                  fill="#febe1e"
                />
                <path
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  d="M11.574,0A11.474,11.474,0,0,1,23.149,11.37,11.474,11.474,0,0,1,11.574,22.74,11.474,11.474,0,0,1,0,11.37,11.474,11.474,0,0,1,11.574,0Z"
                  transform="translate(17655.107 4796)"
                  fill="#febe1e"
                />
                <path
                  id="Path_481"
                  data-name="Path 481"
                  d="M930.838,26.242H914.362A1.362,1.362,0,0,1,913,24.881V6.362A1.362,1.362,0,0,1,914.362,5h10.376a3.769,3.769,0,0,1,2.327.96q.707.71,1.186,1.215c.517.545.848.412.846-.339,0-.148,0-.306,0-.475A1.383,1.383,0,0,1,930.481,5h.357A1.362,1.362,0,0,1,932.2,6.362V24.881a1.362,1.362,0,0,1-1.362,1.362ZM929.222,8.391l.011,0,.009-.014-.091-.178Z"
                  transform="translate(16775.197 4791.681)"
                  fill="#febe1e"
                />
                <path
                  id="path1450"
                  d="M464,6.287V24.806a1.365,1.365,0,0,0,1.362,1.365l16.681.037a.6.6,0,0,0,.448-1.006L476.4,18.473c-.5-.557-.317-1.158.363-1.476a6.059,6.059,0,0,0,3.551-4.1,8.6,8.6,0,0,0,.023-2.707,6.108,6.108,0,0,0-5-5.123,16.675,16.675,0,0,0-2.714-.151c-2.314-.008-5.478,0-7.259,0A1.367,1.367,0,0,0,464,6.287Z"
                  transform="translate(17163.057 4791.756)"
                  fill="#febe1e"
                />
              </g>
            </svg>
          </div>
        </Link>

        <div className="menu-container">
          <nav className="custom-nav" role="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/workpanel">Work</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/category/Web">Web</Link>
                  </li>
                  <li>
                    <Link to="/category/Photography">Photography</Link>
                  </li>
                  <li>
                    <Link to="/category/Graphics">Graphics</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/tools">Tools</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
