import React from "react";
import "./index.scss";

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
  }
  call(){
    const data={name:"vasu"}
  axios.post("/name",data).then(res=>
    console.log("==========",res)
    )
  }

  render() {
    return (
      <div className="booking-container">
          <div className="booking-content-fields" onClick={call()}>
      hi
          </div>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => this.props.toggleSlider(false)}
          >
            cancel
          </button>
          <button className="book-button">book</button>
        </div>
      </div>
    );
  }
}
