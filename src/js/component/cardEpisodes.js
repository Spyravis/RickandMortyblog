import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardEpisodes = ({ name, episode, id }) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col">
      <img
        src={"https://www.nosolorol.com/img/nbp/1/7/9/5/1795-large.jpg"}
        className="card-img-top"
      />
      <div className="card">
        <div className="card-body">
          <h4 className="card-tittle">{name}</h4>
          <p className="card-text">
            {name}
            {episode}
          </p>
          <Link to={"card-details/episode/" + id}>
            {" "}
            <button className="card-text">Learn more!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEpisodes;
