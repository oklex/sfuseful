import React from "react";
import { Link } from "react-router-dom";
import "./SuperNavigation.scss";

class SuperNavigation extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="navigation d-flex justify-content-between">
          <Link to={"/"}>
            <h1>SFUseful</h1>
          </Link>
          <Link to={"/contact"} className="nav-item">
            <p>contact us</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SuperNavigation;
