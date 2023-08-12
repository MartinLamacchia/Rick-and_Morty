import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import meGusta from "../../asset/img/me-gusta (1).png";
import noMeGusta from "../../asset/img/me-gusta (2).png";

const Card = ({ onClose, image, name, species, gender, id }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(!isFav);
      }
    });
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const handleFavorite = () => {
    
    const existe = myFavorites.some(personaje => personaje.name === name)

    if (!isFav) {
      setIsFav(true);
      if(!existe){
        dispatch(addFav({id, image, name, species, gender}))
      }
    } else {
      setIsFav(false);
      myFavorites.filter((char) => char.id !== id);
      dispatch(removeFav(id));
    }
  };

  return (
    <div className={style.container}>
      {show ? (
        <>
          <div className={style.tarjetaBack} onClick={handleShow}>
            <button onClick={() => onClose(id)} className={style.botonCierre}>
              X
            </button>
            <h2>Nombre: {name}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
          </div>
          <Link to={`/detail/${id}`}>
            <button className={style.botonVerMas}>Ver mas</button>
          </Link>
          {isFav ? (
            <button className={style.btnFavBack} onClick={handleFavorite}>
              <img src={meGusta} alt="logo me gusta" />
            </button>
          ) : (
            <button className={style.btnFavBack} onClick={handleFavorite}>
              <img src={noMeGusta} alt="logo me gusta" />
            </button>
          )}
        </>
      ) : (
        <div className={style.tarjetaFront}>
          <div className={style.containerSpan}>
            <span className={style.span}>{id}</span>
          </div>
          {isFav ? (
            <button className={style.btnFavFront} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={style.btnFavFront} onClick={handleFavorite}>
              🤍
            </button>
          )}
          <img
            className={style.imagen}
            onClick={handleShow}
            src={image}
            alt="Imagen"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
