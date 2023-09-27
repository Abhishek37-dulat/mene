import * as actionType from "../constants/SaveTypes";

const INIT_STATE = {
  saveData: [],
};

export const saveReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.GET_ALL_SAVE_PRODUCT:
      return { ...state, saveData: [...action.payload] };

    case actionType.ADD_SAVE_PRODUCT:
      return {
        ...state,
        saveData: [...state.saveData, action.payload],
      };

    case actionType.DELETE_SAVE_PRODUCT:
      const data = state.saveData.filter((el) => el._id !== action.payload._id);
      return {
        ...state,
        saveData: data,
      };

    default:
      return state;
  }
};
