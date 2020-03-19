import React from "react";
import IService, { ICategories } from "../../models/services";
import "./SearchList.scss";
import SingleService from "../../components/Service/SingleService";
import { Services } from "../../services/fetchServices";

interface ISearchListState {
  data: IService[];
  filter: ICategories[];
}

class SearchList extends React.Component<{}, {}> {
  state = {
    data: [],
    filter: []
  };

  componentDidMount = async () => {
    // await Services.fetchServices()
    this.setState({
      data: await Services.fetchServices(),
      filter: [ICategories.careerServices]
    });
    this.filter()
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

  filter = async () => {
    this.setState({
      data: await Services.fetchServices()
    });
    var filteredData: IService[] = [];
    this.state.data.forEach(service => {
      // if it has all categories, then add to new list
      var include: boolean = true;
      this.state.filter.forEach(category => {
        if (!service[category]) {
          include = false;
          console.log("this service isn't a part of category ", category);
        }
      });
      if (include === true) filteredData.push(service);
    });

    this.setState({
      data: filteredData
    })
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
