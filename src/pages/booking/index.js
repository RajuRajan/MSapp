import React from "react";
import "./index.scss";
import HorizontalLabelPositionBelowStepper from '../../components/stepper'


export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      slotState:{}
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
        <div className="button-container">{console.log(this.state.slotState)}
          <button
            className="cancel-button"
            onClick={() => this.props.toggleSlider(false)}
          >
            Cancel
          </button>
          <button className="book-button ">Book</button>
        </div>
      </div>
    );
  }
}
