import React from "react";
import IService, { ICategories } from "../../models/services";
import "./SearchList.scss";
import SingleService from "../../components/Service/SingleService";
import { Services } from "../../services/fetchServices";
import SearchFilters from "./SearchFilters";

interface ISearchListState {
  data: IService[];
  categoryFilters: ICategories[];
  departmentFilters: string[];
}

class SearchList extends React.Component<{}, ISearchListState> {
  state = {
    data: [],
    categoryFilters: [],
    departmentFilters: []
  };

  componentDidMount = async () => {
    // await Services.fetchServices()
    this.setState({
      data: await Services.fetchServices(),
      categoryFilters: [],
      departmentFilters: []
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
    var allData: IService[] = await Services.fetchServices();

    // by categories
    this.setState({
      data: allData.filter(service => {
        // if it has all categories, then add to new list
        var includesCategory: boolean = true;
        this.state.categoryFilters.forEach(category => {
          if (!service[category]) {
            includesCategory = false;
            // console.log("this service isn't a part of category ", category);
          }
        });
        return includesCategory;
      })
    });
    this.filterDepartments();
  };

  filterDepartments = async () => {
    var filterByDepartments: IService[] = this.state.data;
    this.setState({
      data: filterByDepartments.filter(service => {
        var includesDepartment: boolean = true;
        this.state.departmentFilters.forEach(department => {
          if (
            !service.departments.includes(department) &&
            !service.departments.includes("ALL")
          ) {
            includesDepartment = false;
          }
        });
        return includesDepartment;
      })
    });
  };

  updateCategoryFilters = (categories: ICategories[]) => {
    console.log("-> new filter state:: ", categories.toString());
    this.setState({
      categoryFilters: categories
    });
    this.filter();
  };

  updateDepartmentFilters = (departments: string[]) => {
    console.log("-> new filter state:: ", departments);
    this.setState({
      departmentFilters: departments
    });
    this.filter();
  };

  render() {
    return (
      <div>
        <div className="SearchList">
          <div className="container">
            <SearchFilters updateCategories={this.updateCategoryFilters} updateDepartments={this.updateDepartmentFilters}/>
            <h1 className="title">List here</h1>
            <div className="row">{this.showServices()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
