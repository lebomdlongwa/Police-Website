import React from "react";
import "./app.css";
import PoliceApp from "./containers/PoliceApp";
import { UserProvider } from "./containers/userContext";

const App = () => {
  return (
    <UserProvider>
      <PoliceApp />
    </UserProvider>
  );
};

export default App;
