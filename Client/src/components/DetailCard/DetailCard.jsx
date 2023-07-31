import React from "react";
import style from "./DetailCard.module.css";

const DetailCard = ({ character, creado }) => {



  return (
    <>
      <div className={style.container}>
        <h1 className={style.titulo}>Personaje N°{character.id}</h1>
        <div className={style.containerCard}>
          <img className={style.image} src={character.image} alt="Imagen detail" />
          <div className={style.containerCardText}>
            <h2 className={style.text}>Nombre: {character.name}</h2>
            <h2 className={style.text}>Status: {character.status}</h2>
            <h2 className={style.text}>Especie: {character.species}</h2>
            <h2 className={style.text}>Genero: {character.gender}</h2>
            <h2 className={style.text}>Origen: {character.origin?.name}</h2>
            <h2 className={style.text}>Locacion: {character.location?.name}</h2>
            <h2 className={style.text}>Creado: {creado}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
