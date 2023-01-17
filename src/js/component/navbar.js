import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3 pe-5">
      <div className="LogoRickandMorty mx-auto d-flex">
        <img
          id="local-nav-logo-desktop"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
        ></img>
        <div className="dropdown mt-auto">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length > 0 ? (
              store.favorites.map((favorite, i) => {
                return (
                  <li key={i} className="dropdown-item">
                    {favorite}{" "}
                    <p onClick={() => actions.handleDeleteFavorites(favorite)}>🗑</p>
                  </li>
                );
              })
            ) : (
              <li className="dropdown-item">Empty</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
