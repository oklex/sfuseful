import React from "react";
import IService from "../../models/services";
import "./SingleService.scss";

interface ISingleServiceProps {
  service: IService;
  filter?: ((service: IService) => boolean) 
  // callback is a filter function
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
    readMore: false,
    shortDescription: this.props.service.shortDescription.slice(0, 200)
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
    } else if (this.props.service.shortDescription.length > 200) {
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
          <p>{this.state.shortDescription}...</p>
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

export default SingleService;
