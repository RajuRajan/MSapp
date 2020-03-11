import React, { useState, useEffect } from "react";
import "./App.scss";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./notFound";
import { isMobileOnly } from "react-device-detect";
import { history } from "./history";

import Routes from "./router";

function App() {
  const [toggle, setToggle] = useState(false);

  const value = {
    stateToggle: [toggle, setToggle]
  };


  return (
    <Router history={history}>
      <UserProvider value={value}>
        {isMobileOnly ? <Routes history={history} /> : <NotFound />}
      </UserProvider>
    </Router>
  );
}

export default App;
