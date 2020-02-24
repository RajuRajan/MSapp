import React from "react";
import "./index.scss";
import HorizontalLabelPositionBelowStepper from '../../components/stepper'
import {userService} from '../../_services'


export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      slotState:{}
    }
  }

  generateopts(){
    const {bidHour ,city ,pincode ,address ,serviceTime}=this.state.slotState
    const subCategory=this.props.history.location.state.subCategory
    const user_id=localStorage.getItem('user_id')
    return {
      bidHour,city,pincode,address,serviceTime,subCategory,user_id
    }
  }

  async saveBooking(){
    const opts=this.generateopts();
    const data= await userService.bookService(opts);
    console.log(data)
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
