import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";
import CardLocation from "../component/cardLocation";
import CardEpisodes from "../component/cardEpisodes";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
    actions.getLocations();
    actions.getEpisodes();
  }, []);

  return (
    <div className="element">
      <h1>Characters</h1>
      <div className="text-center row row-cols-5 ">
        {store.characters.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              species={item.especies}
              gender={item.gender}
              image={item.image}
            />
          );
        })}
      </div>

      <div className="element1">
        <h1> Location</h1>
        <div className="text-center row row-cols-5 ">
          {store.locations.map((item) => {
            return (
              <CardLocation
                key={item.id}
                type={item.type}
                name={item.name}
                id={item.id}
              />
            );
          })}
        </div>
        <div className="element2">
          <h1> Episodes</h1>
          <div className="text-center row row-cols-5 ">
            {store.episodes.map((item) => {
              return (
                <CardEpisodes key={item.id} type={item.name} id={item.id} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
