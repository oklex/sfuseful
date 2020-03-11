import React from "react";
import IService from "../../models/services";
import './SingleService.scss'

interface ISingleServiceProps {
  service: IService;
}

class SingleService extends React.Component<ISingleServiceProps, {}> {
  render() {
    const service = this.props.service;
    return (
      <div className="service">
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <p className="smallText">contact: {service.contact}</p>
      </div>
    );
  }
}

export default SingleService;
