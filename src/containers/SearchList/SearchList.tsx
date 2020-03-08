import React from "react";
import IService from "../../models/services";
import "./SearchList.scss";

interface ISearchListProps {
  data: IService[];
}

class SearchList extends React.Component<ISearchListProps, {}> {
  showServices = () => {
    return this.props.data.map(this.showSingleService);
  };

  showSingleService = (serivce: IService, index: number) => {
    return (
      <div key={index} className="service">
        <h3>{serivce.title}</h3>
        <p>{serivce.shortDescription}</p>
    <p className='smallText'>contact: {serivce.contact}</p>
      </div>
    );
  };

  render() {
    return (
      <div className="SearchList">
        <div className="container">
          <h1 className="title">List here</h1>
          {this.showServices()}
        </div>
      </div>
    );
  }
}

export default SearchList;
