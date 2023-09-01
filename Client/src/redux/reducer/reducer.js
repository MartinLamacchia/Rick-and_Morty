import {
  ADD_FAV,
  DETAIL_CARD,
  FILTER,
  ORDER,
  REMOVE_FAV,
  ALL_FAV,
} from "../actions/actions";

const initialState = {
  myFavorites: [],
  detailCard: {},
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case ALL_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case DETAIL_CARD:
      return {
        ...state,
        detailCard: action.payload,
      };
    case FILTER:
      return {
        ...state,
        myFavorites:
          action.payload !== "todos"
            ? state.allCharacters.filter(
                (char) => char.gender === action.payload
              )
            : state.allCharacters,
      };
    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) =>
          action.payload === "ascendente" ? a.id - b.id : b.id - a.id
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
