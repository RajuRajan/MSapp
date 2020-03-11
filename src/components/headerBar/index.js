import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import arrow from "../../images/arrow-left-solid.svg";

export default function HeaderBar({ value, history,dimmer }) {
  return (
    <div className={`header-container ${dimmer?`dimmer`:``}`}>
      <Link to="/home" onClick={() => history.push("/home")}>
        <div className="arrow-icon">
          <img src={arrow} width="20px" heigh="20px"></img>
        </div>
      </Link>
      <div className="category-title">{value.title}</div>
    </div>
  );
}
