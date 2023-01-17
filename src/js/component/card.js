import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({ image, name, gender, species, id }) => {
  const { actions } = useContext(Context);
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Species: {species}</p>
          <Link to={"card-details/character/" + id}>
            <button className="card-text">Learn more!</button>
          </Link>
          <button
            className="favorite icon fa-regular fa-heart"
            onClick={() => {
              actions.handleFavorites(name);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
