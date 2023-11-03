import * as actionType from "../constants/WalletTypes";

const INIT_STATE = {
  walletBalance: [],
};

export const walletReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.GET_WALLET:
      return { ...state, walletBalance: [action.payload] };

    default:
      return state;
  }
};
