import React from "react";
import Card from "../Card/Card";
import style from './Cards.module.css'

function Cards({characters, onClose}) {

  return (
    <div className={style.container}>
      {characters?.map((element) => {
        return (
          <Card
            key={element.id}
            id = {element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin}
            image={element.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}

export default Cards