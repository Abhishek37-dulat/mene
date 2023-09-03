import * as actionType from "../constants/profileTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ProfileData: null,
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PROFILE:
      return {
        ...state,
        ProfileData: action.payload ? action.payload[0] : action.payload,
      };
    case actionType.ADD_PROFILE:
      return { ...state, ProfileData: action.payload };
    case actionType.UPDATE_PROFILE:
      console.log("*****", action.payload);
      return { ...state, ProfileData: action.payload };
    default:
      return state;
  }
};
