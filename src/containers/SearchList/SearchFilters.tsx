import React from "react";
import { allCategories, ICategories } from "../../models/services";

interface ISearchFiltersProps {
  update: (list: ICategories[]) => void;
}

interface ISearchFiltersState {
  filterList: ICategories[];
}

class SearchFilters extends React.Component<
  ISearchFiltersProps,
  ISearchFiltersState
> {
  state = {
    filterList: []
  };

  showInput = () => {
    return allCategories.map(category => {
      return (
        <div>
          <input
            type="radio"
            value={category}
            checked={this.contains(category)}
            onClick={() => {
              this.handleChange(category);
            }}
          />
          {category}
        </div>
      );
    });
  };

  contains = (category: ICategories) => {
    var contains: boolean = false;
    this.state.filterList.forEach(c => {
      if (c === category) {
        contains = true;
      }
    });
    return contains;
  };

  handleChange = async (category: ICategories) => {
    console.log("updating filter list with ", category);
    var contains: boolean = false;
    var index: number = -1;
    this.state.filterList.forEach((c, key) => {
      if (c === category) {
        contains = true;
        index = key;
      }
    });
    if (contains) {
      // if in array, remove it= true
      var tempList: ICategories[] = this.state.filterList;
      tempList.splice(index, 1);
      console.log('what is the array after one is removed? ', index, tempList.toString())
      await this.setState({
        filterList: tempList
      });
    } else if (this.state.filterList.length === 0) {
      await this.setState({
        filterList: [category]
      });
    } else {
      var tempList: ICategories[] = this.state.filterList;
      tempList.push(category);
      console.log('what is the array after one is added? ', tempList.toString())
      await this.setState({
        filterList: tempList
      });
    }
    this.props.update(this.state.filterList);
  };

  render() {
    return <div>{this.showInput()}</div>;
  }
}

export default SearchFilters;
