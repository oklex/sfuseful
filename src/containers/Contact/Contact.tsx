import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact: React.FC<{}> = () => {
  return (
    <div className="Contact">
      <div className="container">
        <Link to={"/"}>
          <p> go back</p>
        </Link>
        <h1 className="title">Contact us page</h1>
      </div>
    </div>
  );
};

export default Contact;
