import * as actionType from "../constants/AddressTypes";

import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserAddress: [],
};

export const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_ADDRESS:
      return { ...state, UserAddress: action.payload.data };
    case actionType.UPDATE_USER_ADDRESS:
      const tempdata = state.UserAddress.map((data) => {
        if (data._id === action.payload.data._id) {
          return action.payload.data;
        } else {
          return data;
        }
      });
      return { ...state, UserAddress: tempdata };
    case actionType.ADD_USER_ADDRESS:
      return {
        ...state,
        UserAddress: [...state.UserAddress, action.payload.data],
      };
    case actionType.DELETE_USER_ADDRESS:
      return {
        ...state,
        UserAddress: state.UserAddress.filter(
          (data) => data._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
