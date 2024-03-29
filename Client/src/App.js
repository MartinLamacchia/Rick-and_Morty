import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./views/Inicio/Inicio";
import Home from "./views/Home/Home";
import React, { useState } from "react";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [users, setUsers] = useState([]);

  const [characters, setCharacters] = useState([]);

  const searchCharacter = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3002/rickandmorty/character/${id}`
      );

      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldCharacter) => [...oldCharacter, data]);
        } else {
          window.alert(data);
        }
      } else {
        window.alert("El id ya esta ingresado");
      }
    } catch (error) {
      // (err) => window.alert(err);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <Routes>
        {!users.length > 0 ? (
          <Route path="/" element={<Inicio setUsers={setUsers} />} />
        ) : (
          <Route
            path="/home"
            element={
              <Home
                setUsers={setUsers}
                searchCharacter={searchCharacter}
                characters={characters}
                onClose={onClose}
              />
            }
          />
        )}
        <Route
          path="/home"
          element={
            <Home
              setUsers={setUsers}
              searchCharacter={searchCharacter}
              onClose={onClose}
              characters={characters}
            />
          }
        />
        <Route path="/about" element={<About setUsers={setUsers} />} />
        <Route path="/detail/:id" element={<Detail setUsers={setUsers} />} />
        <Route path="/favorite" element={<Favorites setUsers={setUsers} />} />
      </Routes>
    </div>
  );
}

export default App;
