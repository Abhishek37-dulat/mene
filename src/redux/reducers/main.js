import { combineReducers, createStore, applyMiddleware } from "redux";

import { cartReducers } from "./cartReducer";
import { ProductReducer } from "./productReducer";
import { ProfileReducer } from "./profileReducer";
import { AddressReducer } from "./AddressReducer";
import { CheckOutReducer } from "./CheckOutReducer";
import { BannerReducer } from "./BannerReducer";
import { PostReducer } from "./PostReducer";
import { CommentReducer } from "./CommentReducer";
import { saveReducers } from "./SaveReducer";
import { walletReducers } from "./WalletReducer";
import { seoReducers } from "./SeoReducer";
import { BlogReducer } from "./BlogReducer";
import { ContactReducer } from "./ContactReducer";
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
  CommentReducer,
  saveReducers,
  walletReducers,
  BlogReducer,
  seoReducers,
  ContactReducer,
});

const middleware = [thunk];

const store = createStore(
  rootred,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
