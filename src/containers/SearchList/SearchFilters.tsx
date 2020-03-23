import React from "react";
import {
  allCategories,
  ICategories,
  allDepartments
} from "../../models/services";

interface ISearchFiltersProps {
  updateCategories: (list: ICategories[]) => void;
  updateDepartments: (list: string[]) => void;
}

interface ISearchFiltersState {
  categoriesFilterList: ICategories[];
  departmentsFilterList: string[];
}

class SearchFilters extends React.Component<
  ISearchFiltersProps,
  ISearchFiltersState
> {
  state = {
    categoriesFilterList: [],
    departmentsFilterList: ["ALL"]
  };

  showCategoryInput = () => {
    return allCategories.map(category => {
      return (
        <div key={category.toString()}>
          <input
            type="radio"
            value={category}
            checked={this.categoryIsChecked(category)}
            onClick={() => {
              this.handleCategoryChange(category);
            }}
          />
          <span className="selectionLabel">
            {this.formatCategoryDisplay(category)}
          </span>
        </div>
      );
    });
  };

  formatCategoryDisplay = (category: string) => {
    var newString = "";
    for (var i: number = 0; i < category.length; i++) {
      if (category[i] === category[i].toUpperCase())
        newString = newString + " ";
      if (i === 0) {
        newString = category[i].toUpperCase();
      } else {
        newString = newString + category[i];
      }
    }
    return newString;
  };

  showDepartmentInput = () => {
    return allDepartments.map(department => {
      return (
        <div key={department}>
          <input
            type="radio"
            value={department}
            checked={this.departmentIsChecked(department)}
            onClick={() => {
              this.handleDepartmentChange(department);
            }}
          />
          <span className="selectionLabel">{department}</span>
        </div>
      );
    });
  };

  departmentIsChecked = (department: string) => {
    var contains: boolean = false;
    this.state.departmentsFilterList.forEach(d => {
      if (d === department) {
        contains = true;
      }
    });
    return contains;
  };

  categoryIsChecked = (category: ICategories) => {
    var contains: boolean = false;
    this.state.categoriesFilterList.forEach(c => {
      if (c === category) {
        contains = true;
      }
    });
    return contains;
  };

  handleDepartmentChange = async (department: string) => {
    console.log("updating filter list with ", department);
    var removeDepartment: boolean = false;
    var removeAtIndex: number = -1;
    this.state.departmentsFilterList.forEach((d, key) => {
      if (d === department) {
        removeDepartment = true;
        removeAtIndex = key;
      }
    });

    if (removeDepartment) {
      var tempDepartments: string[] = this.state.departmentsFilterList;
      tempDepartments.splice(removeAtIndex, 1);
      if (tempDepartments.length === 0) {
        tempDepartments = ["ALL"];
      }
      await this.setState({
        departmentsFilterList: tempDepartments
      });
      console.log("removed " + department);
    } else {
      var tempDepartments: string[] = this.state.departmentsFilterList;
      tempDepartments.push(department);
      await this.setState({
        departmentsFilterList: tempDepartments
      });
      console.log("added " + department);
      if (this.state.departmentsFilterList.includes("ALL")) {
        this.handleDepartmentChange("ALL");
      }
    }
    this.props.updateDepartments(this.state.departmentsFilterList);
  };

  handleCategoryChange = async (category: ICategories) => {
    console.log("updating filter list with ", category);
    var removeCategory: boolean = false;
    var removeAtIndex: number = -1;
    this.state.categoriesFilterList.forEach((c, key) => {
      if (c === category) {
        removeCategory = true;
        removeAtIndex = key;
      }
    });

    if (removeCategory) {
      var tempCategoriesList: ICategories[] = this.state.categoriesFilterList;
      tempCategoriesList.splice(removeAtIndex, 1);
      console.log(
        "what is the array after one is removed? ",
        removeAtIndex,
        tempCategoriesList.toString()
      );
      await this.setState({
        categoriesFilterList: tempCategoriesList
      });
    } else if (this.state.categoriesFilterList.length === 0) {
      await this.setState({
        categoriesFilterList: [category]
      });
    } else {
      // normal addition
      var tempCategoriesList: ICategories[] = this.state.categoriesFilterList;
      tempCategoriesList.push(category);
      console.log(
        "what is the array after one is added? ",
        tempCategoriesList.toString()
      );
      await this.setState({
        categoriesFilterList: tempCategoriesList
      });
    }
    this.props.updateCategories(this.state.categoriesFilterList);
  };

  render() {
    return (
      <div className="row filterConents">
        <div className="col-lg-12">
        <h2 className='selectionTitle redText'>Filters</h2>
          <h3 className="selectionTitle">Categories</h3>
          {this.showCategoryInput()}
        </div>
        <div className="col-lg-12">
          <h3 className="selectionTitle">Departments</h3>
          {this.showDepartmentInput()}
        </div>
      </div>
    );
  }
}

export default SearchFilters;
