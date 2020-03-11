import React from "react";
import IService from "../../models/services";
import "./SearchList.scss";
import SingleService from "../../components/Service/SingleService";

interface ISearchListProps {
  data: IService[];
}

class SearchList extends React.Component<ISearchListProps, {}> {
  showServices = () => {
    return this.props.data.map(this.showSingleService);
  };

  showSingleService = (service: IService, index: number) => {
    return (
      <div key={index} className='col-md-4 searchItem'>
        <SingleService service={service} />
      </div>
    );
  };

  render() {
    return (
      <div className="SearchList">
        <div className="container">
          <h1 className="title">List here</h1>
          <div className='row'>{this.showServices()}</div>
          
        </div>
      </div>
    );
  }
}

export default SearchList;
