import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import style from "./Favorites.module.css";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/Cards";
import { removeFav, filterCards, orderCards, allFav} from "../../redux/actions/actions";

const Favorites = ({ setUsers }) => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(allFav)
  }, [])

  const [aux, setAux] = useState(false)

  const onClose = (id) => {
    myFavorites.filter((char) => char.id !== id);
    dispatch(removeFav(id));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  };

  return (
    <div className={style.container}>
      <div className={style.containerSelectFiltro}>
        <select name="Filtro" id="" className={style.selectFiltro} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="todos">Todos</option>
        </select>
        <i></i>
      </div>
      <h1 className={style.titulo}>My Favorite</h1>
      <div className={style.containerSelectOrden}>
        <select name="Orden" id="" className={style.selectOrden} onChange={handleOrder}>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
        <i></i>
      </div>
      <Nav setUsers={setUsers} />
      <Cards onClose={onClose} characters={myFavorites} />
    </div>
  );
};

export default Favorites;
