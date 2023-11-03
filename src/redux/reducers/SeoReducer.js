import * as actionType from "../constants/SeoTypes";

const INIT_STATE = {
  seoData: [],
  SeoSingle: null,
};

export const seoReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.GET_SEO:
      return { ...state, seoData: [...action.payload] };
    case actionType.GET_SINGLE_SEO:
      return { ...state, SeoSingle: action.payload };

    default:
      return state;
  }
};
