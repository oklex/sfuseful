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
    departmentsFilterList: []
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
          {category}
        </div>
      );
    });
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
          {department}
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
      tempDepartments.splice(
          removeAtIndex,
          1
        )
      await this.setState({
        departmentsFilterList: tempDepartments
      });
      console.log('removed ' + department)
    } else if (this.state.departmentsFilterList.length === 0) {
      await this.setState({
        departmentsFilterList: [department]
      });
      console.log('was empty; added ' + department)
    } else {
      var tempDepartments: string[] = this.state.departmentsFilterList;
      tempDepartments.push(department);
      await this.setState({
        departmentsFilterList: tempDepartments
      });
      console.log('added ' + department)
    }

    this.props.updateDepartments(this.state.departmentsFilterList)
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
  return <div className='row'><div className="col-md-6">{this.showCategoryInput()}</div><div className="col-md-6">{this.showDepartmentInput()}</div></div>;
  }
}

export default SearchFilters;
