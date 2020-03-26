import React from "react";
import { Link } from "react-router-dom";
import "./SuperNavigation.scss";
const logo: string = "/logo.png";

class SuperNavigation extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div className="navigation d-flex justify-content-between">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} className="logo-img" />{" "}
              {/* <span className="logo-text redText">SFUseful</span> */}
            </Link>
          </div>
          
          <div className='links'>
            <Link to={"/contact"} className="nav-item">
              contact us
            </Link>
          </div>
          <div className='links'>
            <span className="nav-item">
              <a href="https://www.sfu.ca/">SFU homepage</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SuperNavigation;
