import React, { useState, useEffect } from "react";
import "./App.scss";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {API} from './_helpers/api'

import NotFound from "./notFound";
import { isMobileOnly } from "react-device-detect";
import { history } from "./history";

import Routes from "./router";

function App() {
  const [toggle, setToggle] = useState(false);

  const value = {
    stateToggle: [toggle, setToggle]
  };

  // useEffect(()=>{
  //   // Check for browser support of service worker
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('sw.js')
  //     .then(function(registration) {
  //       // Successful registration
  //       console.log('Hooray. Registration successful, scope is:', registration.scope);
  //     }).catch(function(err) {
  //       // Failed registration, service worker won’t be installed
  //       console.log('Whoops. Service worker registration failed, error:', err);
  //     });
  //   }
  // },[])
  useEffect(()=>{
    API.post('/graphql',{
    "query": "mutation{resetPassword(secretKey:413133,password:\"rj\",email: \"rajarajanksriet@gmail.com\"){isMatched isPasswordChanged  status  code    }}"
}).then((res)=> console.log("====================",res))
  })

  return (
    <Router history={history}>
      <UserProvider value={value}>
        {isMobileOnly ? <Routes history={history} /> : <NotFound />}
      </UserProvider>
    </Router>
  );
}

export default App;
