export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const DETAIL_CARD = 'DETAIL_CARD'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (id) => {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type: ADD_FAV, payload: data}))
  }
}

export const removeFav = (id) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_FAV, payload: id });
  }
}

export const detailCard = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type: DETAIL_CARD, payload: data}))
  }
}

export const filterCards = (gender) => {
  return { 
    type: FILTER, 
    payload: gender
  }
}

export const orderCards = (order) => {
  return { 
    type: ORDER, 
    payload: order
  }
}


