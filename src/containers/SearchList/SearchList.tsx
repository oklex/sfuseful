import React from "react";
import IService, { ICategories } from "../../models/services";
import "./SearchList.scss";
import SingleService from "../../components/Service/SingleService";
import { Services } from "../../services/fetchServices";
import SearchFilters from "./SearchFilters";
import FiltersWrapper from "../../components/SidebarWrapper/SidebarWrapper";

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
    if (this.state.data.length > 0) {
      return this.state.data.map(this.showSingleService);
    } else {
      return (
        <div className="centered errorMessage">
          <h2>There are no resources that match your criteria!</h2>
        </div>
      );
    }
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
    await this.filterDepartments();
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
      <div className="SearchList">
        <div className=" row">
          <div className="filterBar col-sm-3">
            <FiltersWrapper>
              <SearchFilters
                updateCategories={this.updateCategoryFilters}
                updateDepartments={this.updateDepartmentFilters}
              />
            </FiltersWrapper>
          </div>
          <div className="contentList col-sm-9">
            <h1 className="title">SFU Resources</h1>
            <div className="row">{this.showServices()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchList;
