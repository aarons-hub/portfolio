import React from "react";
import { useState, useEffect } from "react";

export const WorkSorter = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URI = "/portfolio/data.json";

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortme();
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

  console.log(data);

  // Filter functions
  const filter = (props: string) => {
    if (props === "All") {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((i) => i.category === props);
    setFiltered(filtered);
  };

  // Remove duplicates in list
  const categories = data.map((i) => i.category);
  const removeDuplicateCategory = [...new Set(categories)];

  const ButtonsList = () => (
    <>
      <div className="filter-buttons-group">
        {removeDuplicateCategory.map((i) => (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            key={i}
            onClick={() => filter(i)}
          >
            {i}
          </button>
        ))}
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => filter("All")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => sortme()}
        >
          Sort high to low
        </button>
      </div>
    </>
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return null;

  function sortme() {
    const lowhigh = [...data].sort((a, b) => b.id - a.id);
    setFiltered(lowhigh);
  }

  const ItemsTemplate = ({ id, image, title, category, content }) => {
    return (
      <div className="cards">
        <div key={id}>
          <div className="card-number">{id}</div>
          <img src={image} alt={title} />
          <div className="card-content">
            <p>{id}</p>
            <h5>{title}</h5>
            <p>{category}</p>
            <p>{content}</p>
            <button className="btn btn-primary btn-sm">Details</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="work-container-main">
      <div className="work-header-svg"></div>
      <h1>WorkSorter</h1>
      <ButtonsList />
      <div className="row cards-container gap-20 justify-content-space-evenly">
        {filtered.map((i) => {
          return (
            <div
              className="card"
              key={i.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  ease: "easeOut",
                  duration: 1,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  ease: "easeIn",
                  duration: 10,
                },
              }}
            >
              <ItemsTemplate
                id={i.id}
                title={i.title}
                image={i.image}
                content={i.content}
                category={i.category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
