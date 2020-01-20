import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Event from "../../pages/event";
import Footer from "../../components/footer";

export default function Landing(props) {
  const [category, setCategory] = useState("");
  useEffect(() => {
    setCategory(props.history.location.state?.category);
  });
  return (
    <>
      {" "}
      {props.history.location.pathname.split("/")[1] !== "events" ? (
        <div>
          <Sidebar history={props.history} />
          <Topbar history={props.history} setCategory={setCategory} />
          <Footer />
        </div>
      ) : (
        <div>
          <Event category={category} history={props.history}/>
        </div>
      )}
     
    </>
  );
}
