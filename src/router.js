import React,{useState,useEffect}from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile"
import Landing from "./pages/landing";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Terms from "./pages/terms";
import Booking from "./pages/booking";

export default function AppRouter({ history }) {
  return (
    <Switch>
     {/* <div className="custom-container" style={{height:vh}}> */}
      {" "}
      {localStorage.getItem("login_status") ? (
         <>
        <Route
          exact
          path={["/","/home", "/events", "/terms-of-use", "/privacy-policy","/my-bookings"]}
          render={() => <Landing history={history} />}
        />
        <Route path="/profile" render={() =><Profile history={history} />} />
       </>
      ) : (
        <>
          <Route exact path="/" render={() => <SignUp history={history} />} />
          <Route path="/signin" render={() => <SignIn history={history} />} />
        </>
      )}
      {/* </div> */}
    </Switch>
  );
}
