import * as actionType from "../constants/cartConstant";

const INIT_STATE = {
  carts: [],
  display: [],
  searchQuery: [],
};

export const cartReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.EMPTY_CART:
      return { ...state, carts: [] };
    case actionType.GET_CART:
      return { ...state, carts: [...action.payload] };
    case actionType.ADD_CART:
      console.log(
        "ADD TO CART?????????????????----------+++++++++: ",
        action.payload
      );
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case actionType.INCREASE_CART:
      let temp_data = action.payload;
      let f_data = state?.carts?.map((data) => {
        if (temp_data._id === data._id) {
          return temp_data;
        }
        return data;
      });

      return {
        ...state,
        carts: f_data,
      };
    case actionType.DEC_CART:
      let t_data = action.payload;
      let fi_data = state?.carts?.map((data) => {
        if (t_data._id === data._id) {
          return t_data;
        }
        return data;
      });

      return {
        ...state,
        carts: fi_data,
      };

    case actionType.DELETE_CART:
      return {
        ...state,
        carts: [],
      };

    case actionType.SEARCH_ITEM:
      return { ...state, searchQuery: action.payload };

    case actionType.REMOVE_CART:
      const data = state.carts.filter((el) => el._id !== action.payload._id);
      return {
        ...state,
        carts: data,
      };

    default:
      return state;
  }
};
