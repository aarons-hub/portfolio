import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export const WorkCategory = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

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

  const { cat } = useParams();

  function paramFilter(param) {
    const filtered = data.filter((i) => i.category == param);
    console.log(filtered);
    console.log(param);
  }

  const filterCat = data.filter((i) => {
    return i.category == cat;
  });

  return (
    <>
      <div className="work-container-main">
        <div className="work-header-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1722.411"
            height="331"
            viewBox="0 0 1722.411 331"
          >
            <g id="work" transform="translate(-17721 -5703)">
              <path
                id="path1450"
                d="M464,24.479v263.81a19.441,19.441,0,0,0,19.4,19.44l237.623.524a8.578,8.578,0,0,0,6.377-14.336l-86.792-95.841c-7.191-7.941-4.52-16.5,5.176-21.019,17.843-8.318,43.386-25.64,50.581-58.385,2.294-10.441,2.1-28.015.324-38.567-7.5-44.446-39.646-66.542-71.227-72.98C614.979,4.989,597.515,5.01,586.8,4.971c-32.965-.12-78.041-.025-103.4.048A19.472,19.472,0,0,0,464,24.479Z"
                transform="translate(18297.848 5707.675)"
                fill="#212e37"
              />
              <path
                id="Path_482"
                data-name="Path 482"
                d="M149.882,155.789,14.127,290.91A8.283,8.283,0,0,1,0,285.038V23.932A19.932,19.932,0,0,1,19.932,4H446.471a8.228,8.228,0,0,1,5.8,14.061L178.135,290.91a8.284,8.284,0,0,1-14.127-5.872V161.66a8.283,8.283,0,0,0-14.127-5.871Z"
                transform="translate(17721 5706.973)"
                fill="#212e37"
              />
              <circle
                id="Ellipse_18"
                data-name="Ellipse 18"
                cx="165.5"
                cy="165.5"
                r="165.5"
                transform="translate(18247 5703)"
                fill="#212e37"
              />
              <path
                id="path869"
                d="M750,23.932V289.024a19.932,19.932,0,0,0,19.932,19.932H991.174a8.279,8.279,0,0,0,5.866-14.122L873.292,170.6a20.01,20.01,0,0,1,0-28.243L997.04,18.121A8.279,8.279,0,0,0,991.174,4H769.932A19.932,19.932,0,0,0,750,23.932Z"
                transform="translate(18443.957 5706.973)"
                fill="#212e37"
              />
            </g>
          </svg>
        </div>
        <div className="work-wrapper">
          <div className="category-title-and-btn">
            <h2 className="custom-heading category">{cat}</h2>
            <Link to={"/worklandingpage"} className="go-back-btn work-category">
              Go back
            </Link>
          </div>

          <div className="work-container">
            {filterCat.map((i) => {
              return (
                <div key={i.id} className="item-container">
                  <Link to={`/categorydetails/${i.id}`} className="image">
                    <img
                      loading="lazy"
                      id={`image-${i.id}`}
                      src={i.image}
                      alt={i.title}
                      style={{ objectPosition: `100% ${i.objectposition}` }}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
