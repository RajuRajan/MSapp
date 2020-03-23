import React , {useEffect, useState} from 'react';
import {userService} from '../../_services'
import {getUserId} from '../../_helpers';
import moment from 'moment'

export default function Mybids({history}){
const [approvedBids , setApprovedBids] = useState([])
useEffect(()=>{
    userService.getMyBids({user_id:getUserId()}).then(res=>{
        setApprovedBids(res.data.data)
    })
},[])


return (
    <>
  {approvedBids?.length? approvedBids?.map(value => {
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
                <div className="card-label">Customer Name </div>
                <div className="card-value">{`${value.user.firstName} ${value.user.lastName}`}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Customer Number </div>{" "}
                <div className="card-value">{value.user.phoneNo}</div>{" "}
              </div>
              <div className="card-item">
                <div className="card-label">Service Charge </div>
                <div className="card-value">{value.captainCharge}</div>
              </div>
              <div className="card-item">
                <div className="card-label">Appointment Time</div>
                <div className="card-value">{moment(value.serviceTime).format("hh:mm a")}</div>
              </div>
            </div>
            <div className="captain-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlK7C8QKWakDOTBVjBPeJ-XitjrkIEGva8J3c-1sNn5VO6nt-7"></img>
            </div>
          </div>
        ) : " "}
      </div>
    );
  }):<div style={{height:"230px",textAlign:"center",marginTop:"50%"}}>No Approved Bids To Show</div>}
  </>
  )

}