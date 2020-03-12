import React from "react";
import IService from "../../models/services";
import "./SearchList.scss";
import SingleService from "../../components/Service/SingleService";
import { Services } from "../../services/fetchServices";

interface ISearchListState {
  data: IService[];
}

class SearchList extends React.Component<{}, {}> {
  state = {
    data: []
  };

  componentDidMount = async () => {
    // await Services.fetchServices()
    this.setState({
      data: await Services.fetchServices()
    });
  };

  showServices = () => {
    return this.state.data.map(this.showSingleService);
  };

  showSingleService = (service: IService, index: number) => {
    return (
      <div key={index} className="col-md-4 searchItem">
        <SingleService service={service} />
      </div>
    );
  };

  render() {
    return (
      <div className="SearchList">
        <div className="container">
          <h1 className="title">List here</h1>
          <div className="row">{this.showServices()}</div>
        </div>
      </div>
    );
  }
}

export default SearchList;
