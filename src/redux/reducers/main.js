import { combineReducers, createStore, applyMiddleware } from "redux";

import { cartReducers } from "./cartReducer";
import { ProductReducer } from "./productReducer";
import { ProfileReducer } from "./profileReducer";
import { AddressReducer } from "./AddressReducer";
import { CheckOutReducer } from "./CheckOutReducer";
import { BannerReducer } from "./BannerReducer";
import { PostReducer } from "./PostReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootred = combineReducers({
  ProductReducer,
  ProfileReducer,
  cartReducers,
  AddressReducer,
  CheckOutReducer,
  BannerReducer,
  PostReducer,
});

const middleware = [thunk];

const store = createStore(
  rootred,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
