import React from "react";
import { define } from "remount";
import App from "./App";

const Root = () => <App />;

define({ "x-application": Root });
