import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
  const params = useParams();
  const { actions } = useContext(Context);
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/" + params.type + "/" + params.id
    );
    const data = await response.json();
    setItemDetails(data);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Details {params.type}</h5>
          <p className="card-text"> Name: {itemDetails.name}</p>
          {Object.keys(itemDetails).map((x, i) => {
            if (typeof itemDetails[x] != "object") {
              return (
                <p className="card-text" key={i}>
                  {x}: {itemDetails[x]}
                </p>
              );
            }
          })}
          <Link to={"/"}>
            {" "}
            <button className="card-text">Return back!</button>
          </Link>
          <button
            className="favorite icon fa-regular fa-heart"
            onClick={() => {
              actions.handleFavorites(itemDetails.name);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};
