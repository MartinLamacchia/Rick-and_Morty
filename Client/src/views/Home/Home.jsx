import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import Nav from "../../components/Nav/Nav";

function Home({ setUsers, searchCharacter, characters, onClose }) {



  return (
    <div className={style.container}>
      <h1 className={style.titulo}>My Cards</h1>
      <Nav setUsers={setUsers} searchCharacter={searchCharacter} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default Home;
