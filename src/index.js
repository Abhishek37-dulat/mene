import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/reducers/main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/authContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <Auth0Provider
            domain="dev-3vanxxrywls25ilm.us.auth0.com"
            clientId="t09vuJi5S4qZedVSi2deoQd0C1X9TEhz"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <App />
          </Auth0Provider>
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </DataProvider>
);
