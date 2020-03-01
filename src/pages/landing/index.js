import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Event from "../../pages/event";
import Footer from "../../components/footer";
import io from 'socket.io-client'
import ReactGA from 'react-ga';

export default function Landing(props) {
  const [category, setCategory] = useState("");
  useEffect(() => {
    setCategory(props.history.location.state?.category);
  });

  useEffect(()=>{
    // var socket = io.connect('http://localhost:90');
    // socket.on('news', function (data) {
    //   console.log(data);
    //   socket.emit('my other event', { my: 'data' });
    // });

    // ReactGA.set({
    //   userId: auth.currentUserId(),
    //   // any data that is relevant to the user session
    //   // that you would like to track with google analytics
    // })
    // props.history.listen(location => {
    //   console.log("location")
    //   ReactGA.set({ page: location.pathname }); // Update the user's current page
    
    //   ReactGA.pageview(location.pathname); // Record a pageview for the given page
    // });
    ReactGA.event({category:"landing",action:"landing"})

  },[])
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
