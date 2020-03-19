import React from "react";
import IService, { ICategories } from "../../models/services";
import "./SingleService.scss";

interface ISingleServiceProps {
  service: IService;
}

interface ISingleServiceState {
  readMore: boolean;
  shortDescription: string;
}

class SingleService extends React.Component<
  ISingleServiceProps,
  ISingleServiceState
> {
  state = {
    hide: false,
    readMore: false,
    shortDescription: this.props.service.description
      ? this.props.service.description.slice(0, 200)
      : ""
  };
  
  showDescription = () => {
    if (this.state.readMore) {
      return (
        <span>
          <p>{this.props.service.shortDescription}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.toggleDescription()}
          >
            reduce
          </button>
        </span>
      );
    } else if (this.state.shortDescription.length > 200) {
      return (
        <span>
          <p>{this.state.shortDescription}...</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.toggleDescription()}
          >
            readmore
          </button>
        </span>
      );
    } else {
      return (
        <span>
          <p>{this.state.shortDescription}</p>
        </span>
      );
    }
  };

  toggleDescription = () => {
    this.setState({
      readMore: !this.state.readMore
    });
  };

  render() {
    if (this.state.hide) {
      return <div></div>;
    } else {
      const service = this.props.service;
      return (
        <div className="service">
          <h3>{service.title}</h3>
          {this.showDescription()}
          <p className="smallText">contact: {service.contact}</p>
        </div>
      );
    }
  }
}

export default SingleService;
