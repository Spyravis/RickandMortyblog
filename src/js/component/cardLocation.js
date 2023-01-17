import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardLocations = ({ status, gender, name, id }) => {
  const { actions } = useContext(Context);
  return (
    <div className="col">
      <img
        src={
          "https://bolamundo.com/wp-content/uploads/2019/03/icono-bola-mundo.jpg"
        }
        className="card-img-top"
      />
      <div className="card">
        <div className="card-body">
          <h4 className="card-tittle">{name}</h4>
          <p className="card-text">
            {status}
            {gender}
          </p>
          <Link to={"card-details/location/" + id}>
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

export default CardLocations;
