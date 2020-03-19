import React from "react";
import IService, { ICategories } from "../../models/services";
import "./SearchList.scss";
import SingleService from "../../components/Service/SingleService";
import { Services } from "../../services/fetchServices";
import SearchFilters from "./SearchFilters";

interface ISearchListState {
  data: IService[];
  filter: ICategories[];
}

class SearchList extends React.Component<{}, ISearchListState> {
  state = {
    data: [],
    filter: []
  };

  componentDidMount = async () => {
    // await Services.fetchServices()
    this.setState({
      data: await Services.fetchServices(),
      filter: []
    });
    this.filter();
  };

  // componentDidUpdate(prevProps: any, prevState: ISearchListState) {
  //   if (this.state.filter !== prevState.filter) {
  //     this.filter();
  //     console.log("new filters:: ", this.state.filter.toString());
  //   }
  // }

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
    var data: IService[] = await Services.fetchServices();

    this.setState({
      data: data.filter(service => {
        // if it has all categories, then add to new list
        var include: boolean = true;
        this.state.filter.forEach(category => {
          if (!service[category]) {
            include = false;
            // console.log("this service isn't a part of category ", category);
          }
        });
        return include;
      })
    });
  };

  updateFilters = (categories: ICategories[]) => {
    console.log(
      "-> new filter state:: ",
      categories.toString()
    );
    this.setState({
      filter: categories
    });
    this.filter()
  };

  render() {
    return (
      <div>
        <div className="SearchList">
          <div className="container">
            <SearchFilters update={this.updateFilters} />
            <h1 className="title">List here</h1>
            <div className="row">{this.showServices()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
