import React from "react";
import "./Error404.scss";
import { Link } from "react-router-dom";

const Error404: React.FC<{}> = () => {
  return (
    <div className="error">
      <h1 className="title">Error 404</h1>
      <Link to={"/"}>
        <p> go back</p>
      </Link>
    </div>
  );
};

export default Error404;
