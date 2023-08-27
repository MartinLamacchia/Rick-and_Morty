import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const DETAIL_CARD = "DETAIL_CARD";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (id) => {
  const endpoint = "http://localhost:3002/rickandmorty/fav";
  return async (dispatch) => {
    try {
      await axios.post(endpoint, id).then(({ data }) => {
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      });
    } catch (error) {
      return window.alert("Error al incluir en Favoritos");
    }
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3002/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      await axios.delete(endpoint).then(({ data }) => {
        console.log(id, data);
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
      });
    } catch (error) {
      return window.alert("Error al borrar de Favoritos");
    }
  };
};

export const detailCard = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3002/rickandmorty/character/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: DETAIL_CARD, payload: data }));
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
