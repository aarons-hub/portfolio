import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "./Header";

export const WorkDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const API_URI = "/portfolio/data.json";

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const result = await fetch(API_URI);
      const dataElements = await result.json();
      setData(dataElements);
    } catch (error) {
      console.error(error.message);
    }
  };

  const found = data.find((i) => {
    return i.id == id;
  });

  return (
    <>
      <div className="work-container-main">
        <div className="work-header-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="903"
            height="171"
            viewBox="0 0 903 171"
          >
            <g
              id="Group_199"
              data-name="Group 199"
              transform="translate(-12348 -2868)"
            >
              <path
                id="Union_12"
                data-name="Union 12"
                d="M84.4,70.017,0,153V0H240L84.4,153Z"
                transform="translate(12348 2872)"
                fill="#18262f"
              />
              <path
                id="Union_11"
                data-name="Union 11"
                d="M56.052,157H0V0H134L56.052,78.5,134,157Z"
                transform="translate(13117 2872)"
                fill="#18262f"
              />
              <circle
                id="Ellipse_18"
                data-name="Ellipse 18"
                cx="85.5"
                cy="85.5"
                r="85.5"
                transform="translate(12625 2868)"
                fill="#18262f"
              />
              <path
                id="Union_10"
                data-name="Union 10"
                d="M142.764,156.605H72.848v-.315H0V0H73.444V0l.106,0h.337A47.507,47.507,0,0,1,107.36,13.682,46.526,46.526,0,0,1,117.506,28.53a46.3,46.3,0,0,1,0,36.366A46.536,46.536,0,0,1,107.36,79.744,47.481,47.481,0,0,1,84.49,92.252l58.275,64.353h0Z"
                transform="translate(12902.28 2872.399)"
                fill="#18262f"
              />
            </g>
          </svg>
        </div>
        <Header />
        <h1>WorkDetails page</h1>
        <div className="btn-wrapper">
          <Link to={"/work"} className="go-back-btn">
            Go back
          </Link>
        </div>
        {found && (
          <div className="detail-container">
            <div className="detail-image">
              <Link to="/work">
                <img src={found.image} alt={found.title} />
              </Link>
            </div>
            <h1 className="detail-heading">{found.title}</h1>
            <p>{found.content}</p>
            <h1>id (remove later): {found.id}</h1>
          </div>
        )}
      </div>
    </>
  );
};
