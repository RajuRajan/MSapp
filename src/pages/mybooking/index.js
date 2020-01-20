import React from "react";
import { myBooking } from "../../common";
import "./index.scss";

export default function Mybooking({ history }) {
  return myBooking.map(value => {
    return (
      <div className="my-booking-card-container">
        {value?.isappointment_fixed ? (
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
                <div className="card-label">Booking id </div>
                <div>{value.booking_id}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Captain name </div>
                <div>{value.captain_name}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Captain number </div>{" "}
                <div>{value.captain_number}</div>{" "}
              </div>
              <div className="card-item">
                <div className="card-label">Service charge </div>
                <div>{value.captain_charge}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Appointment time</div>
                <div>{value.appointment_time}</div>
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
                <div className="card-label">Booking issue </div>{" "}
                <div>{value.booking_type}</div>{" "}
              </div>
              <div className="card-item">
                <div className="card-label">Booking time </div>
                <div>{value.booking_time}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Booking id </div>
                <div>{value.booking_id}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Booking status </div>
                <div>{value.booking_status}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });
}
