import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { useLocation } from "react-router-dom";

function SearchBar({ searchCharacter }) {
  const [id, setID] = useState("");
  const location = useLocation();
  
  const handleChange = (event) => {
    setID(event.target.value);
  };

  const handleSearch = (id) => {
    searchCharacter(id);
    setID("");
  };

  return (
    <>
      {location.pathname === "/home" ? (
        <div className={style.container}>
          <input
            value={id}
            id="input-serch"
            type="search"
            className={style.input}
            onChange={handleChange}
          />
          <button onClick={() => handleSearch(id)}>Agregar</button>
        </div>
      ) : <div className={style.divVacio}></div>}
    </>
  );
}

export default SearchBar;
