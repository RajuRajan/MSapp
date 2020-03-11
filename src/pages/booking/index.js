import React from "react";
import "./index.scss";
import HorizontalLabelPositionBelowStepper from '../../components/stepper'
import {userService,getUUID} from '../../_services'
import moment from 'moment'



export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      slotState:{}
    }
  }

  generateopts(){
    const {bidHour ,city ,pincode ,address ,serviceTime,phoneNo}=this.state.slotState
    const subCategory=this.props.history.location.state.subCategory
    const user_id=localStorage.getItem('user_id')
    const bookingStatus="Pending"
    const bookingId=getUUID()
    const bookingTime=moment().format("hh:mm")
    return {
      bidHour,city,pincode,address,serviceTime,subCategory,user_id,bookingId,bookingStatus,bookingTime,phoneNo
    }
  }

  async saveBooking(){
    const opts=this.generateopts();
    const data= await userService.bookService(opts);
    if(data.data.code===200){
      this.props.history.push("/my-bookings")
      window.location.reload()
    }
  }
  render() {
    return (
      <div className="booking-container">
          <div className="booking-content-fields">
            <div className="stepper-custom-container">
              <HorizontalLabelPositionBelowStepper updateParentState={(slotState) => this.setState({ slotState })}/>
              </div>
              
          </div>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => this.props.toggleSlider(false)}
          >
            Cancel
          </button>
          <button 
          className={`book-button ${this.state.slotState.tabOneError===false&&this.state.slotState.tabTwoError===false?'':'disabled'}`}
          disabled={this.state.slotState.tabOneError===false&&this.state.slotState.tabTwoError===false?false:true}
          onClick={()=>this.saveBooking()}
          >Book</button>
        </div>
      </div>
    );
  }
}
