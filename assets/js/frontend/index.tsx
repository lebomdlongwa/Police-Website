import React from "react";
import { define } from "remount";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

define({ "x-application": Root });
