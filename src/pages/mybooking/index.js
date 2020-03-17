import React,{useEffect,useState} from "react";
import { myBooking } from "../../common";
import "./index.scss";
import {userService} from '../../_services'
import {getUserId} from '../../_helpers'
import moment from "moment";

export default function Mybooking({ history={} }) {
  const [myBookings,setMyBookings]=useState(0)

  useEffect(()=>{
  userService.getBookings({user_id:getUserId()}).then(res=>
    setMyBookings(res.data.data)
    )
  },[])

  return (
    <>
  {myBookings?.length? myBookings?.map(value => {
    return (
      <div className="my-booking-card-container">
        {value?.isappointmentFixed ? (
          <div className="my-booking-card">
            <div
              className="label-color"
              style={{
                backgroundColor: " #3bb78f",
                backgroundImage:
                  "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)"
              }}
            ></div>
            <div className="card-items">
              <div className="card-item">
                <div className="card-label">Booking Id </div>
                <div className="card-value">#{value.bookingId}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Captain Name </div>
                <div className="card-value">{value.captainName}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Captain Number </div>{" "}
                <div className="card-value">{value.captainNumber}</div>{" "}
              </div>
              <div className="card-item">
                <div className="card-label">Service Charge </div>
                <div className="card-value">{value.captainCharge}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Appointment Time</div>
                <div className="card-value">{value.appointmentTime}</div>
              </div>
            </div>
            <div className="captain-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlK7C8QKWakDOTBVjBPeJ-XitjrkIEGva8J3c-1sNn5VO6nt-7"></img>
            </div>
          </div>
        ) : (
          <div className="my-booking-card">
            <div
              className="label-color"
              style={
                value.isrejected
                  ? {
                      backgroundColor: "#eb4511",
                      backgroundImage:
                        "linear-gradient(315deg, #eb4511 0%, #b02e0c 74%)"
                    }
                  : {
                      backgroundColor: "#f39f86",
                      backgroundImage:
                        "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)"
                    }
              }
            ></div>
            <div className="card-items">
              <div className="card-item">
                <div className="card-label">Booking Service </div>{" "}
                <div className="card-value">{value.subCategory}</div>{" "}
              </div>
              <div className="card-item">
                <div className="card-label">Booking Time </div>
                <div className="card-value">{value.bookingTime}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Booking Id </div>
                <div className="card-value">#{value.bookingId}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Booking Status </div>
                <div className="card-value">{value.bookingStatus}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }):<div style={{height:"230px",textAlign:"center",marginTop:"50%"}}>No Bookings To Show</div>}
  </>
  )
  
}
  
