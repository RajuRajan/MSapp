import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderBar from "../../components/headerBar";
import { getCategoryDetails } from "../../common";
import "./index.scss";
import Booking from "../booking";

export default function Event(props) {
  const [categoryDetails, setCategoryDetails] = useState("");
  const [slider, setSlider] = useState("");
  const [vh,setVh]=useState(window.innerHeight);
  useEffect(()=>{
    setVh(0);
  },[])
  useEffect(()=>{
    if(vh==0){
      setVh(window.innerHeight)
    }
  },[vh]
  )


  useEffect(() => {
    setCategoryDetails(getCategoryDetails(props.category));
  }, [props]);

  return (
    <div className={`event-container ${slider ? `dimmer` : ``}`} style={{height:vh ,overflow:"hidden!important"}}>
      <HeaderBar
        value={categoryDetails}
        history={props.history}
        dimmer={slider}
      />
      <div className="service-listing-container" >
        {categoryDetails.services
          ? categoryDetails?.services.map(value => {
              return (
                <div className="service-items" onClick={() => {setSlider(true);props.history.push({state:{category:props.category,subCategory:value.service_name}})}}>
                  <div className="service-img">
                    <img
                      src={value.service_img}
                      width="50px"
                      height="50px"
                    ></img>
                  </div>
                  <div className="service-name">{value.service_name}</div>
                </div>
              );
            })
          : ""}
      </div>
      <div className={`slide-container ${slider ? `active` : ``}`} >
       <Booking toggleSlider={setSlider} history={props.history}/>

      </div>
    </div>
  );
}
