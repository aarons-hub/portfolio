import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [active, setActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    windowWidth <= 800 ? setActive(false) : setActive(true);
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    windowWidth <= 800 ? setActive(false) : setActive(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const showMenu = () => {
    setActive(true);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const menudata = [
    {
      id: 1,
      title: "Home",
      path: "/",
      children: [],
    },
    {
      id: 2,
      title: "About",
      path: "/about",
      children: [],
    },
    {
      id: 3,
      title: "Work",
      path: "/worklandingpage",
      children: [
        {
          id: 7,
          title: "Web",
          path: "/category/Web",
        },
        {
          id: 8,
          title: "Photography",
          path: "/category/Photography",
        },
        {
          id: 9,
          title: "Graphics",
          path: "/category/Graphics",
        },
        {
          id: 10,
          title: "Print",
          path: "/category/Print",
        },
      ],
    },
    {
      id: 4,
      title: "Tools",
      path: "/tools",
      children: [],
    },
    {
      id: 5,
      title: "History",
      path: "/history",
      children: [],
    },
    {
      id: 6,
      title: "Contact",
      path: "/contact",
      children: [],
    },
  ];
  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const menuChildrenVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    closed: {
      y: 50,
      opacity: 0.2,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <div className="header-wrapper">
        <Link className="home" to="/">
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
                  d="M930.838,26.242H914.362A1.362,1.362,0,0,1,913,24.881V6.362A1.362,1.362,0,0,1,914.362,5h10.376a3.769,3.769,0,0,1,2.327.96q.707.71,1.186,1.215c.517.545.848.412.846-.339,0-.148,0-.306,0-.475A1.383,1.383,0,0,1,930.481,5h.357A1.362,1.362,0,0,1,932.2,6.362V24.881a1.362,1.362,0,0,1-1.362,1.362Z"
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
          <nav
            className={`custom-nav ${active ? "responsive" : "not-responsive"}`}
            role="navigation"
          >
            <button className="nav-close-btn" onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.121"
                height="16.121"
                viewBox="0 0 16.121 16.121"
              >
                <g
                  id="Group_270"
                  data-name="Group 270"
                  transform="translate(-5359.439 47.561)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="14"
                    y2="14"
                    transform="translate(5360.5 -46.5)"
                    fill="none"
                    stroke="#febe1e"
                    strokeWidth="3"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x1="14"
                    y2="14"
                    transform="translate(5360.5 -46.5)"
                    fill="none"
                    stroke="#febe1e"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </button>
            <motion.ul
              variants={menuVariants}
              animate={active ? "open" : "closed"}
            >
              {menudata.map((e, index) => {
                return (
                  <motion.li key={e.id} variants={menuChildrenVariants}>
                    <Link to={e.path} onClick={closeMenu}>
                      {e.title}
                    </Link>
                    <ul className="dropdown">
                      {e.children.map((e, index) => {
                        return (
                          <li key={e.id}>
                            <Link to={e.path} onClick={closeMenu}>
                              {e.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <button
            className={`nav-btn ${active ? "hide" : "show"}`}
            onClick={showMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="15"
              viewBox="0 0 32 15"
            >
              <g
                id="Group_269"
                data-name="Group 269"
                transform="translate(-1758 -28)"
              >
                <rect
                  id="Rectangle_484"
                  data-name="Rectangle 484"
                  width="32"
                  height="3"
                  transform="translate(1758 28)"
                  fill="#febe1e"
                />
                <rect
                  id="Rectangle_485"
                  data-name="Rectangle 485"
                  width="32"
                  height="3"
                  transform="translate(1758 34)"
                  fill="#febe1e"
                />
                <rect
                  id="Rectangle_486"
                  data-name="Rectangle 486"
                  width="32"
                  height="3"
                  transform="translate(1758 40)"
                  fill="#febe1e"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
